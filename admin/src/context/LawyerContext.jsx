import { createContext } from "react";

export const LawyerContext = createContext();

// eslint-disable-next-line no-unused-vars
const LawyerContextProvider = (props) => {
  const value ={

  }

  return (
    <LawyerContext.Provider value={value}>
      {props.children}
    </LawyerContext.Provider>
  );

};

export default LawyerContextProvider