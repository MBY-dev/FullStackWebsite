import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null));

  const login = () => {
//TODO
setcurrentUser({
    id: 0,
    name: "Berat2",
profilePicture: "https://images.pexels.com/photos/1871619/pexels-photo-1871619.jpeg?auto=compress&cs=tinysrgb&w=600"   })
;
  };


  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
}, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}