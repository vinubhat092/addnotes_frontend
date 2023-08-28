import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { useNavigate } from 'react-router-dom';


const NotePage = () => {
    let noteId = useParams()
    let [note,setNote] = useState([])
    let navigate = useNavigate()
    useEffect( ()=>{
        getNote()
    },[noteId.id])

    let getNote = async ()=>{
        let response = await fetch(`/api/notes/${noteId.id}/`)
        let data = await response.json()
        setNote(data)
    }

    let updateNotes = async ()=>{
        console.log("asdfg")
        let response = await fetch(`/api/notes/update/${noteId.id}/`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(note)
        })
    }

    let handleSubmit = () =>{
        console.log("asmnb")
        updateNotes()
        navigate("/")

    }

    
  return (
    <div className='note'>
        <h3>
            <ArrowLeft onClick={handleSubmit}/>
        </h3>
        
        <textarea onChange={(e) => {setNote({...note,'body':e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage