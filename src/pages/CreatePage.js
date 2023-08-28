import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
  console.log("asdsd")



  let [noteBody, setNoteBody] = useState('')
  let Navigate = useNavigate()

  let Notebodychange = (event)=>{
    console.log("hersss")
    setNoteBody(event.target.value)
  }

  let CreateNotebody = async ()=>{
    console.log("calllsssss")
    let response  = await fetch('/api/notes/create/',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({"body":noteBody})
    })
    console.log("called", response.json(), response.data);
    Navigate("/")
  }

  
  return (
    <div>
        <h2>Create Note</h2>
        <textarea 
         value={noteBody}
         onChange={Notebodychange}
         placeholder='Enter note here'
        /> 
        {<button onClick={CreateNotebody}>Create note</button>}

    </div>
  )
}

export default CreatePage