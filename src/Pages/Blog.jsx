import React,{useEffect, useState} from 'react'
import axios from 'axios';


export default function Blog() {
const [users, setUsers] = useState();
useEffect(() => {
  // const numberOfItems = 5;
  axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((response) => setUsers(response.data));
},[]);
   

  return (
   <>
  
  <div>
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
