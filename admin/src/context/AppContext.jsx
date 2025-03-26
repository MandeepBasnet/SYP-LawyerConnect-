import { createContext } from "react";

export const AppContext = createContext();

// eslint-disable-next-line no-unused-vars
const AppContextProvider = (props) => {
  const value ={

  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );

};

export default AppContextProvider