import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NotesListPages from '../pages/NotesListPages'
import AuthContext from '../context/AuthContext'
const ListItem = ({note,onDeleteNote}) => {
  let navigate = useNavigate();
  // let [notes, setNotes] = useState([])
  // let {authTokens} = useContext(AuthContext)

  function updateNote(){
    navigate(`/note/${note.id}`)
  }


  function deleteNote(){
    console.log("callll")
    let response = fetch(`/api/notes/delete/${note.id}/`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"

      },
      body:JSON.stringify(note)
    })
    .then(()=>{
      console.log("asdfghjkjhgfd")
      onDeleteNote();
    })
  }

  return (
    <div>
        <div>
          <div className='notes-list-item'>
            {note.body}
          </div>
          <div className="button-container">
            <button className="update-button" onClick={updateNote}>Update</button>
            <button className="delete-button" onClick={deleteNote}>Delete</button>
          </div>
        </div>
    </div>
  )
}

export default ListItem