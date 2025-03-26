/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { assets } from "../assets/assets"
import RelatedLawyers from "../components/RelatedLawyers"
import { toast } from "react-toastify"
import axios from "axios"

const Appointment = () => {
  const { lawyerId } = useParams()
  const { lawyers, currencySymbol, backendUrl, token, getLawyersData } = useContext(AppContext)
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const navigate = useNavigate()

  const [lawInfo, setLawInfo] = useState(null)
  const [lawyerSlots, setLawyerSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState("")

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Please login to book an appointment")
      return navigate("/login")
    }

    // Check if we have slots and a selected time
    if (!lawyerSlots[slotIndex] || !lawyerSlots[slotIndex][0] || !slotTime) {
      toast.error("Please select a valid time slot")
      return
    }

    try {
      const date = lawyerSlots[slotIndex][0].datetime

      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      const slotDate = day + "_" + month + "_" + year

      const { data } = await axios.post(
        backendUrl + "/api/user/book-appointment",
        { lawyerId, slotDate, slotTime },
        { headers: { token } },
      )
      if (data.success) {
        toast.success(data.message)
        navigate("/my-appointments")
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    // Move fetchLawInfo function inside useEffect
    const fetchLawInfo = () => {
      const lawyer = lawyers.find((law) => law._id === lawyerId)
      setLawInfo(lawyer)
    }

    fetchLawInfo()
  }, [lawyers, lawyerId])

  // Add a separate useEffect that depends on lawInfo
  useEffect(() => {
    if (lawInfo) {
      const getAvailableSlots = async () => {
        setLawyerSlots([])

        //Getting current date
        const today = new Date()

        for (let i = 0; i < 7; i++) {
          //getting date with index
          const currentDate = new Date(today)
          currentDate.setDate(today.getDate() + i)

          //setting end time of the date with index
          const endTime = new Date(currentDate)
          endTime.setHours(21, 0, 0, 0)

          //setting hours
          if (today.getDate() === currentDate.getDate()) {
            currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
            currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
          } else {
            currentDate.setHours(10)
            currentDate.setMinutes(0)
          }

          const timeSlots = []

          while (currentDate < endTime) {
            const formattedTime = currentDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })

            const day = currentDate.getDate()
            const month = currentDate.getMonth() + 1
            const year = currentDate.getFullYear()

            const slotDate = day + "_" + month + "_" + year
            const slotTime = formattedTime

            // Check if slot is already booked - with proper null/undefined checks
            let isSlotAvailable = true
            if (lawInfo && lawInfo.slots_booked && lawInfo.slots_booked[slotDate]) {
              isSlotAvailable = !lawInfo.slots_booked[slotDate].includes(slotTime)
            }

            if (isSlotAvailable) {
              //Add slot to array
              timeSlots.push({
                datetime: new Date(currentDate),
                time: formattedTime,
              })
            }

            //Increment current date by 30 minutes
            currentDate.setMinutes(currentDate.getMinutes() + 30)
          }

          setLawyerSlots((prev) => [...prev, timeSlots])
        }
      }

      getAvailableSlots()
    }
  }, [lawInfo])

  return (
    lawInfo && (
      <div>
        {/*Lawyers Image*/}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={lawInfo.image || "/placeholder.svg"}
              alt=""
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/*Lawyers Details*/}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {lawInfo.name}
              <img className="w-5" src={assets.verified_icon || "/placeholder.svg"} alt="" />
            </p>

            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {lawInfo.degree} - {lawInfo.practice}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">{lawInfo.experience}</button>
            </div>

            {/*Lawyers About*/}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon || "/placeholder.svg"} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">{lawInfo.about}</p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment Fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {lawInfo.fee}
              </span>
            </p>
          </div>
        </div>

        {/*Available Slots*/}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Available Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {lawyerSlots.length > 0 &&
              lawyerSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index ? "bg-primary text-white" : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-2 overflow-x-scroll mt-4">
            {lawyerSlots.length > 0 &&
              lawyerSlots[slotIndex] &&
              lawyerSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    slotTime === item.time ? "bg-primary text-white" : "border border-gray-200"
                  }`}
                  key={index}
                >
                  {item.time}
                </p>
              ))}
          </div>
          <button
            onClick={bookAppointment}
            className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
          >
            Book an Appointment
          </button>
        </div>

        {/*Listing Related Lawyers*/}
        <RelatedLawyers lawyerId={lawyerId} practice={lawInfo.practice} />
      </div>
    )
  )
}

export default Appointment

