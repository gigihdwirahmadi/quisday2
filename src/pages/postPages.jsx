import React from 'react';
import { useParams,UseLocation, useLocation } from 'react-router-dom';
const PostPage = ()=>{
    const location = useLocation();
    console.log(location.state.content)
    const {id}= useParams();
    return (
        
        <>
        <div class="wall">
        <div class="item2">

       
        <h3>Post {id}</h3>
     
        <div class="content">{location.state.content}</div>
        </div>
        </div>
        </>
    );
};
export default PostPage;