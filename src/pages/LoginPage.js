import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <div className='form-container'>
        <form onSubmit={loginUser}>
            <input type='text' name='username' placeholder='Enter username'/>
            <input type='password' name='password' placeholder='Enter password'/>
            <input type='submit' value="LOGIN" className='submit-button'/>
        </form>
    </div>
  )
}

export default LoginPage