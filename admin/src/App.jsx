/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React , {useContext} from 'react'
import Login from './pages/Login.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext.jsx';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AllAppointments from './pages/Admin/AllAppointments.jsx';
import AddLawyer from './pages/Admin/AddLawyer.jsx';
import LawyersList from './pages/Admin/LawyersList.jsx';
import { LawyerContext } from './context/LawyerContext.jsx';
import LawyerDashboard from './pages/Lawyer/LawyerDashboard.jsx';
import LawyerAppointments from './pages/Lawyer/LawyerAppointments.jsx';
import LawyerProfile from './pages/Lawyer/LawyerProfile.jsx';

const App = () => {

  const {aToken} = useContext(AdminContext)
  const {lToken} = useContext(LawyerContext)
  return aToken || lToken ?  (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className=' flex items-start'>
        <Sidebar />
        <Routes>
          {/* Admin Route */}
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard/>} />
          <Route path="/all-appointments" element={<AllAppointments/>} />
          <Route path="/add-lawyer" element={<AddLawyer/>} />
          <Route path="/lawyer-list" element={<LawyersList/>} />

          {/* Lawyer Route */}
          <Route path="/lawyer-dashboard" element={<LawyerDashboard/>} />
          <Route path="/lawyer-appointments" element={<LawyerAppointments/>} />
          <Route path="/lawyer-profile" element={<LawyerProfile/>} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
    <Login/>
    <ToastContainer />
    </>
  )
}

export default App