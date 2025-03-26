/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext, appContextValue } from './AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const AppContextProvider = ({ children }) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [lawyers,setLawyers] = useState([])

  const getLawyersData = async () => {
    try {
      const {data} = await axios.get(backendUrl + '/api/lawyer/list')
      if (data.success) {
        setLawyers(data.lawyers)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getLawyersData()
  },[])

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;