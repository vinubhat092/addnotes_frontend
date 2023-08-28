import React, {useState,useEffect, useContext} from 'react'
import ListItem from '../components/ListItem'
import AuthContext from '../context/AuthContext'
import CreatePage from './CreatePage'
import { useNavigate } from 'react-router-dom'
const NotesListPages = () => {
    let [notes, setNotes] = useState([])
    let {authTokens} = useContext(AuthContext)
    let navigate = useNavigate()

    useEffect (()=>{
        getNotes()
    },[])

    let getNotes = async ()=>{
        console.log("asdfgfd")
        let response = await fetch("/api/notes/",{
            method: 'GET',
            headers : {
                "Content-Type":"Application/json",
                "Authorization": "Bearer " + String(authTokens.access)
            }    
        })
        let data = await response.json()
        console.log("DATA:",data)
        setNotes(data)
    }

    function navigateCreatepage (){
        console.log("navigated")
        navigate("/notes/create")
    }

  return (
    <div className='notes'>
        <div className='notes-header'>
            <h2 className='notes-title'>&#9782; Notes</h2>
            <button onClick={navigateCreatepage}>Add note</button>
            <p className='notes-count'>{notes.length}</p>
        </div>
        <div className='notes-list'>
            {notes?.map((note,index) =>(
                <ListItem key={index} note={note} onDeleteNote={getNotes}/>
            ))}
        </div>
    </div>
  )
}

export default NotesListPages