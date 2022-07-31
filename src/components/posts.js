import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addPost, deletePost, updatePost } from '../Redux/postsSlice';
import View from './view';



function Posts() {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
   

    const posts = useSelector(state =>state.posts.items)

    const dispatch = useDispatch();

  return (
    <div>
     <div className='form'>
        <input type="text"
        value={title}
         placeholder='Enter Post Title'
         onChange={(e)=>setTitle(e.target.value)}
         />
      
        <input type="text" 
        value={description}
        placeholder='Enter Post Desc'
        onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={() => {
            title && description &&
            dispatch(addPost({id:posts.length+1,title,description})) 
            setTitle("")
            setDescription("")
      }}>Add Post </button>
      </div>


      <div className='posts'>
      <View posts = {posts}/>
     </div>
       
    </div>
  )
}


export default Posts