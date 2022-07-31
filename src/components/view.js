import React, { useState } from 'react'
import { deletePost, updatePost } from '../Redux/postsSlice';
import {useDispatch,useSelector} from 'react-redux'
import OpenEdit from './open';

function View(props) {

    const [edit, setEdit] = useState(false);
    const [id,setId] = useState(null);
    const dispatch = useDispatch();
    
    
    
  return (
    <div>
    {props.posts.length > 0 ? props.posts.map(post => <div key={post.id} className='post'>
      
      <h2>{post.title}</h2>  
      <p>{post.description}</p>
     
      <button onClick={() => dispatch(deletePost(post.id))}>Delete</button> 
      <button onClick={() =>{
        setEdit(true);
        setId(post.id);
      }}>Edit</button>  

      {edit && id == post.id && <OpenEdit post={post} setEdit = {setEdit}/>}
       

      </div> ): "There is no posts "} 
    </div>
  )
}

export default View