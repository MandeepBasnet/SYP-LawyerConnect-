/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { AppContext, appContextValue } from './AppContext';

const AppContextProvider = ({ children }) => {
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