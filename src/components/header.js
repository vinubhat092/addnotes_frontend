import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
const Header = () => {
  let {user,logoutUser} = useContext(AuthContext)
  return (
    <div className='app-header'>
      {/* <h1>Note List</h1> */}
      <Link to="/">NoteList</Link>
      {user && <p>User: {user.username}</p>}
      {user ?(
        
        <button onClick={logoutUser}>Logout</button>
  
      ):(
        <p></p>
      )}
      
    </div>
  )
}

export default Header