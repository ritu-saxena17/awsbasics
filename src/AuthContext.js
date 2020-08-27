import React, { createContext, useState } from 'react';

export const AuthContext=createContext();
 const AuthProvider=({children})=>{
     const [username,setUsername]=useState('');
     return(<AuthContext.Provider value={[username,setUsername]}>
         {children}
     </AuthContext.Provider>
     );
 }

 export default AuthProvider;