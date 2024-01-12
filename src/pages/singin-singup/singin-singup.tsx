import React from 'react'
import SingIn from '../../components/header/sing-in/sing-in'
import SingUp from '../../components/header/sing-up/sing-up'
import "./singin-singup.scss"


function AuthenticationPage() {
  return (
    <div className='singin-singup'>
      <SingIn></SingIn>
      <SingUp></SingUp>
    </div>
  )
}
  
  export default AuthenticationPage