import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      console.log(user);
      console.log("This is Admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("employee");
      console.log("This is user");
    } else {
      alert("Invalid Credentials");
    }
  };

  // handleLogin('admin@me.com', '123')

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      (user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />)
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
