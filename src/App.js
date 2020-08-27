import React from 'react'
import Amplify from 'aws-amplify'
import awsExports from "./aws-exports";
import SignUp from './screens/Signup'

Amplify.configure(awsExports);

function App(){
  return(
   <SignUp/>
  )
}

export default App