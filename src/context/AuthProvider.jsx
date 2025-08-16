import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // const data = getLocalStorage();
  // console.log(data);

  useEffect(() => {
    const { employee, admin } = getLocalStorage();
    setUserData({ employee, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
