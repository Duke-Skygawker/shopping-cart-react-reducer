import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState();
  const [total, setTotal] = useState();
  return (
    <GlobalContext.Provider
      value={{ total, setTotal, itemsInCart, setItemsInCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
