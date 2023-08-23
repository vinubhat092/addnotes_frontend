import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';


const NotePage = () => {
    let noteId = useParams()
    let [note,setNote] = useState([])

    useEffect( ()=>{
        getNote()
    },[noteId.id])

    let getNote = async ()=>{
        let response = await fetch(`/api/notes/${noteId.id}/`)
        let data = await response.json()
        setNote(data)
    }

    
  return (
    <div className='note'>
        <h3>
            <Link to="/">
                <ArrowLeft />
            </Link>
        </h3>
        
        <textarea defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage