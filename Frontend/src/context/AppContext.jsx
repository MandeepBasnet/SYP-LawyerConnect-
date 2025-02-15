import { createContext } from "react";
import { lawyers } from "../assets/assets";
import PropTypes from 'prop-types';

export const AppContext = createContext()

const AppContextProvider = (props) => {



  const value = {
    lawyers
  }

  AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}



export default AppContextProvider