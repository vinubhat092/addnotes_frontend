import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({note}) => {
  return (
    <div>
        <Link to={`/note/${note.id}`}>
          <div className='notes-list-item'>
            {note.body}
          </div>
        </Link>
    </div>
  )
}

export default ListItem