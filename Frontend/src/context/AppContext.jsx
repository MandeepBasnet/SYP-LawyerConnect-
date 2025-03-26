import { createContext } from "react";
import { lawyers } from "../assets/assets";


export const AppContext = createContext(null);

export const appContextValue = {
  lawyers, 
  currencySymbol: '$'
};