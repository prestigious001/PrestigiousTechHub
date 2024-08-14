
import React,{useEffect, useState} from 'react'
import axios from 'axios';


export default function Test() {
const [users, setUsers] = useState();
const [post, setPost] = useState();
useEffect(() => {
  // const numberOfItems = 5;
  axios
  .get('https://jsonplaceholder.typicode.com/users').then((response) => setUsers(response.data))

  // .get('https://jsonplaceholder.typicode.com/posts').then((resp) => setPost(resp.data));
  
  
},[]);

useEffect(() => {
  // const numberOfItems = 5;
  axios
  // .get('https://jsonplaceholder.typicode.com/users').then((response) => setUsers(response.data))

  .get('https://jsonplaceholder.typicode.com/photos').then((resp) => setPost(resp.data));
  
  
},[]);
   
   

  return (
   <>
  
  <div>

    {post?.slice(0,4).map((pos) => (
      <ul>
        <li key={pos.id}>
      <p>{pos.title}</p>
      <img src={pos.thumbnailUrl} alt="" />

        </li>
      </ul>
    ))}

    {users?.slice(0, 2).map((user) => (
      <div key = {user.id}>
        <h4>{user.name}</h4>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.website}</p>
        <p>{user.phone}</p>
      </div>
    ))}
  </div>
  
   </>
  )
}



// import axios from 'axios';
// import React, {useState,useEffect} from 'react'


// export default function Testimonials() {

// const [userImg, SetUserImg] = useState([]);
// const [userName, SetUserName] = useState([]);




// useEffect(() => {

//   axios
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then((response) => setUsers(response.data));
// },[]);


// const fetchApi =  () =>{
//   const userApi = 'https://jsonplaceholder.typicode.com/users';
//   const userPicApi = 'https://jsonplaceholder.typicode.com/photos';

//   const getUserApi = axios.get(userApi);
//   const getUserPicApi = axios.get(userPicApi);

//   axios.all(getUserApi, getUserPicApi).then(
//     axios.spread((...allData) => { 
//       const allDataUser = allData[0]
//       const allDataPic = allData[1]

//       console.log(allDataUser)
//       console.log(allDataPic)

// })
//   )
// }
// useEffect(() =>{
//   fetchApi()
// },[])



//   return (
//     <div>Testimonials
//       <h1>Testimonials</h1>
//     </div>
//   )
// }
