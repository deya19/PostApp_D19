import React, { useState } from 'react'
import { updatePost } from '../Redux/postsSlice';
import {useDispatch,useSelector} from 'react-redux'

function OpenEdit(props) {
    const [updatedTitle,setUpdatedTitle] = useState("");
    const [updatedDescription,setUpdatedDescription] = useState("");
    const dispatch = useDispatch();
   
   
   

  return (
    <div>
         
      
        <>
        <input type = "text"
         placeholder='Updated Title'
         onChange={(e) => setUpdatedTitle(e.target.value)}
         />

        <input type = "text" 
        placeholder='Updated Description'
        onChange={(e) => setUpdatedDescription(e.target.value)}
        />

        <button onClick={() => {
          updatedTitle && updatedDescription &&
        dispatch(updatePost({id:props.post.id,title:updatedTitle,description:updatedDescription}))
        updatedTitle && updatedDescription &&
        props.setEdit(false)
        }}>Update</button>

        <button onClick={() => {
        props.setEdit(false)
        }}>Close Edit</button>
        </>
    
    </div>
  )
}

export default OpenEdit