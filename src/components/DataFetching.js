import React, { useState, useEffect } from "react";
import axios from "axios";

// function DataFetching() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((res) => {
//         console.log(res);
//         setPosts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}> {post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// Fetching individual post by passing the post id in the get request 

// function DataFetching() {
//   const [post, setPost] = useState({});
//   const [id, setId] = useState(1);
//   const handleClick = () => {
//     setIdFromButtonClick(id)
//   } 
//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((res) => {
//         console.log(res);
//         setPost(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [id]);


//   return (
//     <div>
//       <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//       <div>{post.title}</div>
//     </div>
//   );
// }

// Triggerd Effect on button click 

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick , setIdFromButtonClick] = useState(1)
  
    const handleClick = () => {
      setIdFromButtonClick(id)
    } 
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          console.log(res);
          setPost(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [idFromButtonClick]);
  
  
    return (
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="button " onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
      </div>
    );
  }
export default DataFetching;
