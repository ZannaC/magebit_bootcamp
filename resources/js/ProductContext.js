import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);

  const updateAmount = (newAmount) => {
    setAmount(newAmount);
  };

  return (
    <ProductContext.Provider value={{ amount, updateAmount }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
