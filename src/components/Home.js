import React, {useState, useEffect} from 'react';
import Post from './Post';
import Axios from 'axios'; 
import Navigation from './Navigation';


function Home(){

const [allPosts, setPosts] = useState([]);  

useEffect(() => {
  setTimeout(() => {
    Axios.get('/api/posts/get').then((res) => {
    setPosts(res.data.posts) 
  }).catch(error => console.error(error));
  }, 1000)
}, [])

return(
  <div>
  <Navigation /> 
  <div>
     {allPosts.map((post) => {
       return(
         <div className = "home_container">
         <Post post = {post} postTitle = {post.title} username = {post.user.firstName} showPost = {false} />
         </div>
       ) 
     })} 
 </div>
 </div>
)
}
export default Home; 