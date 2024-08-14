
import React,{useEffect, useState} from 'react'
import axios from 'axios';


export default function Test() {


const [post, setPost] = useState();


useEffect(() => {
  // const numberOfItems = 5;
  axios
  // .get('https://jsonplaceholder.typicode.com/users').then((response) => setUsers(response.data))

  .get('https://jsonplaceholder.typicode.com/photos').then((resp) => setPost(resp.data));
  
  
},[]);
   
   

  return (
   <>
    

  <div className='container'>
    <div className="row text center" >
  {post?.slice(0,12).map((pos) => (
     
      <div className="col-6 col-md-3 col-lg-3 mt-5 " key={pos.id}>
      
      <h6>{pos.title}</h6>
      <img src={pos.thumbnailUrl} alt="" />

        </div>
    ))}
    
    </div>
    
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
