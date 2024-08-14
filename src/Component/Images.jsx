import React, {useState,useEffect} from 'react'
import axios from 'axios';

export default function Images(props) {
  const [users, setUsers] = useState();
  useEffect(() => {
    // const numberOfItems = 5;
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => setUsers(response.data));
  },[]);
     
  return (

    
    <div className='about' >
       {users?.slice(0, 1).map((user) => (
              <div key={user.id} >
        <img src={props.src} height={props.height} borderRadius ="20px" alt="" />
        <h3> <strong>{user.title.slice(0,9)}</strong></h3>
           
                <p>{user.body}</p>  
              </div>
            ))}
          
          
    </div>
  )
}
// echo "# PrestigiousTechHub" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/prestigious001/PrestigiousTechHub.git
// git push -u origin main
