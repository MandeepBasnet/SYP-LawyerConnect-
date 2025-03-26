import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import {toast} from "react-toastify";

export const LawyerContext = createContext();

// eslint-disable-next-line no-unused-vars
const LawyerContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const[lToken, setLToken]=useState(localStorage.getItem('lToken')? localStorage.getItem('lToken'):'')

  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const {data} = await axios.get(backendUrl + '/api/lawyer/appointments' , {headers: {lToken}} )
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
      const {data} = await axios.post(backendUrl + '/api/lawyer/complete-appointment' , {appointmentId}, {headers: {lToken}} )
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
      const {data} = await axios.post(backendUrl + '/api/lawyer/cancel-appointment' , {appointmentId}, {headers: {lToken}} )
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


  const value ={
    lToken,
    setLToken,
    backendUrl, appointments,
    setAppointments, getAppointments,
    completeAppointment, cancelAppointment
  }

  return (
    <LawyerContext.Provider value={value}>
      {props.children}
    </LawyerContext.Provider>
  );

};



export default LawyerContextProvider