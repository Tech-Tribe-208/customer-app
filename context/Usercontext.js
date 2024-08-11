// import { createContext, useContext, useState } from "react";

// export const useUsercontext = createContext(undefined)

// export const UserContext = ({ children }) => {
//   const [user, setUser] = useState(false); // Initialize user state
//   const RegisterUser = () => {
//     setUser(!user);
//   };

//   return (
//     <useUsercontext.Provider value={{ RegisterUser, user }}>
//       {children}
//     </useUsercontext.Provider>
//   );
// };