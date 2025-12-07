import React, { createContext, useEffect, useState } from 'react';
import { getLocalstorageData } from '../utils/localstorage';

// 1. Create Context
export const AuthContext = createContext();

// 2. Provider Component
const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalstorageData();
    setuserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={{ userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
