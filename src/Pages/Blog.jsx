import React,{useEffect, useState} from 'react'
import axios from 'axios';


export default function Blog() {
const [users, setUsers] = useState();
useEffect(() => {
  axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((response) => setUsers(response.data));
},[]);
   

  return (
   <>
  <div className='container'>
    <h1 className='text-center mt-3'><strong> Our Blog </strong></h1>
    <div className="row">
        {users?.slice(0, 12).map((user) => (
      
      <div key = {user.id} className='col-6 col-md-2 col-lg-2 text-center mt-5'>
        <h4>{user.name}</h4>
        <p>{user.username}</p>
        <p>{user.email.slice(0,17)}</p>
        <p>{user.website}</p>
        <p>{user.phone}</p>
      </div>
    ))}
    </div>
  
  </div>
  
   </>
  )
}
