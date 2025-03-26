/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';

// Create the context
export const AppContext = createContext(null);

// Export the context value for components that need it directly
export const appContextValue = {
  lawyers: [], 
  currencySymbol: '$'
};

// Context Provider Component - now using named export
export const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [lawyers, setLawyers] = useState([]);
  const [token,setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token'):false);
  const [userData, setUserData] = useState(false);
  


  const getLawyersData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/lawyer/list');
      if (data.success) {
        setLawyers(data.lawyers);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } });
      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

    // Create the dynamic context value object that will be provided
    const contextValue = {
      lawyers,
      currencySymbol: '$',
      token, setToken,
      backendUrl,
      userData,setUserData,
      loadUserProfileData
    };

  useEffect(() => {
    getLawyersData();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
