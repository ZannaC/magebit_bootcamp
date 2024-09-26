import React, { createContext, useContext } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children, login }) => (
    <UserContext.Provider value={login}>{children}</UserContext.Provider>
);
