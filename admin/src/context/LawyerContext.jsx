"use client"

import { useState } from "react"
import { createContext } from "react"
import axios from "axios"
import { toast } from "react-toastify"

export const LawyerContext = createContext()

// eslint-disable-next-line no-unused-vars
const LawyerContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [lToken, setLToken] = useState(localStorage.getItem("lToken") ? localStorage.getItem("lToken") : "")

  const [appointments, setAppointments] = useState([])

  const [dashData, setDashData] = useState(false)

  const [profileData, setProfileData] = useState(false)

  const getAppointments = async () => {
    try {
      // Log the token to debug
      console.log("Using token for appointments:", lToken)

      const { data } = await axios.get(backendUrl + "/api/lawyer/appointments", {
        headers: {
          ltoken: lToken, // Use lowercase 'ltoken' to match backend expectation
        },
      })

      if (data.success) {
        setAppointments(data.appointments)
        console.log(data.appointments)
      } else {
        toast.error(data.message)
        console.log(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const completeAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/lawyer/complete-appointment",
        { appointmentId },
        {
          headers: {
            ltoken: lToken, // Use lowercase 'ltoken' to match backend expectation
          },
        },
      )

      if (data.success) {
        toast.success(data.message)
        getAppointments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/lawyer/cancel-appointment",
        { appointmentId },
        {
          headers: {
            ltoken: lToken, // Use lowercase 'ltoken' to match backend expectation
          },
        },
      )

      if (data.success) {
        toast.success(data.message)
        getAppointments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const getDashData = async () => {
    try {
      // Log the token to debug
      console.log("Using token for dashboard:", lToken)

      const { data } = await axios.get(backendUrl + "/api/lawyer/dashboard", {
        headers: {
          ltoken: lToken, // Use lowercase 'ltoken' to match backend expectation
        },
      })

      if (data.success) {
        setDashData(data.dashData)
        console.log(data.dashData)
      } else {
        toast.error(data.message)
        // Potentially handle unauthorized access (e.g., clear token)
        if (data.message.includes("Authorized")) {
          setLToken("")
          localStorage.removeItem("lToken")
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      // Handle network errors or other issues
    }
  }

  const getProfileData = async () => {
    try {

      const { data } = await axios.get(backendUrl + "/api/lawyer/profile", {
        headers: {ltoken: lToken },
      })

      if (data.success) {
        setProfileData(data.profileData)
        console.log(data.profileData)
      } else {
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      // Handle network errors or other issues
    }
  }

  const value = {
    lToken,
    setLToken,
    backendUrl,
    appointments,
    setAppointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
    dashData,
    setDashData,
    getDashData,
    profileData,
    setProfileData,
    getProfileData
  }

  return <LawyerContext.Provider value={value}>{props.children}</LawyerContext.Provider>
}

export default LawyerContextProvider

