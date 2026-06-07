import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'
const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template
   
   title ="welcome Back"
   desc1 = "build skills for today, tomorrow, and beyond"
   desc2 = "Education to future-proof your career"
   image ={signupImg}
   formtype = "signup"
   setIsLoggedIn={setIsLoggedIn}
   
   />
  )
}

export default SignUp