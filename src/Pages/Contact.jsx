import React,{useState,useEffect} from 'react';
import { FaComment,FaPhoneAlt,FaHeadphones } from 'react-icons/fa';
import con1 from '../images/con1.jpg';
import axios from 'axios';

export default function Contact() {
  const [users, setUsers] = useState();
  const [usersPics, setUsersPics] = useState();

  useEffect(() => {
    // const numberOfItems = 5;
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => setUsers(response.data));
  },[]);
     
useEffect(() => {
  // const numberOfItems = 5;
  axios
  // .get('https://jsonplaceholder.typicode.com/users').then((response) => setUsers(response.data))

  .get('https://jsonplaceholder.typicode.com/photos').then((resp) => setUsersPics(resp.data));
  
  
},[]);
  

  return (
  <> 
    {/* <div>
    {users?.slice(0, 2).map((user) => (
      <div key = {user.id}>
        <h4>{user.name}</h4>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.website}</p>
        <p>{user.phone}</p>       
      </div>
    ))}
  </div> */}
    
    <div className="container- contact-page">
      <div className="row bg-primary" >
        <div className="col-12 col-md-6 col-lg-6 " >

        <h1 className='text-light top-contact '><strong>Get in Touch</strong> </h1>
        <p className='text-light m-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repellat.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, dignissimos?
        </p>
        </div>

        <div className="col-12 col-md-6 col-lg-6 " >

        <img src={con1} alt="" className='con-img' />
        </div>

        <div className="col-12 col-md-6 col-lg-4 con-card text-center p-5">
        <FaPhoneAlt size={30} color='darkblue' />

          <h4 className='mt-4'>Talk To A Sales Person</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus laudantium, aperiam laborum accusamus amet id libero tenetur et unde.</p>
          </div>
          
          <div className="col-12 col-md-6 col-lg-4 con-card text-center p-5">
        <FaComment size={30} color='darkblue' />

             <h4 className='mt-4'>Custumer Support</h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus laudantium, aperiam laborum accusamus amet id libero tenetur et unde.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 con-card text-center p-5 ">
        <FaHeadphones size={30} color='darkblue' />

            <h4 className='mt-4'>Advisory</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus laudantium, aperiam laborum accusamus amet id libero tenetur et unde.</p>
          </div>
      </div>
    </div>
    <div>


   
      <div className='container'>
        <h2 className='text-center mt-5 mb-4 '><strong> Meet the Brains Behind the Hub</strong></h2>
        <div className="row text-center" >


        {users?.slice(0, 8).map((user) => (
          <div className="col-12 col-md-3 col-lg-3  mt-5 mb-5 " key = {user.id}>
             {usersPics?.slice(0, 1).map((pic) => (
            <img  src={pic.url} alt="" width={100} height={100} style={{borderRadius: '200px',marginBottom:'20px'} } />
          ))}
          
              <span><h5>{user.name}</h5></span>
             <span><strong>Username : </strong>{user.username}</span> <br />
             <span><strong>Email : </strong> {user.email}</span> <br />
             <span><strong>Website : </strong> {user.website}</span> <br />
             <span><strong>Phone :</strong> {user.phone}</span> 
          
          </div>
            ))} 
        </div>
       
      </div>
  </div>
  {/* <img src="https://source.unsplash.com/random" /> */}
      
  </>
  )
}
