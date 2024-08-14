import React from 'react';
// import axios from 'axios';
import Images from '../Component/Images';
import coding from '../images/coding.png';
import Cover from '../images/Cover.png';
import full from '../images/full.jpg';
import abtract from '../images/Abract.png';


const title = "The Early Journey";
const height = "200px";

// const content = "Lorem, ips repudiandae.";

export default function Image () {
   
      
    return (      
   <>
  

    <div className="container-fluid aboutpage"  >
      <div className="row con-about" >
        <h2 className='mt-3 text-primary text-center' ><strong>There is More to Our Story !</strong> </h2>
        <div className="col-12 col-md-6 col-lg-3  text-center mt-5 about">
        <Images src = "https://media.istockphoto.com/id/1486359843/photo/api-application-programming-interface-software-development-tool.jpg?s=1024x1024&w=is&k=20&c=a7R9bW9tby0iX5YxSDL4Zu7_9fJKG9lNBHDm7OEGFy0=" title = {title} height = {height} />
        </div>
        <div className="col-12 col-md-6 col-lg-3 text-center mt-5">
        <Images src = {Cover} title = {title} height = {height}/>
    
        </div>
        <div className="col-12 col-md-6 col-lg-3 text-center mt-5">
        <Images src = {Cover} title = {title} height = {height} />
        </div>
        <div className="col-12 col-md-6 col-lg-3 text-center mt-5">
        <Images src = {full} title = {title} height = {height} />
        </div>

        <div className="col-12 col-md-6 col-lg-3  text-center mt-5 about">
        <Images src = "https://img.freepik.com/free-photo/medium-shot-friends-taking-selfie_23-2149033774.jpg?t=st=1723626906~exp=1723630506~hmac=85b26e46bea4ad7dacd4942b81afdfec90f728fd2f4d999286e61141a9fc8c38&w=900" title = {title} height = {height} />
        </div>
        <div className="col-12 col-md-6 col-lg-3 text-center mt-5">
        <Images src = {coding} title = {title} height = {height} />
        </div>
        <div className="col-12 col-md-6 col-lg-3 text-center mt-5">
        <Images src = {full} title = {title} height = {height} />
        </div>
        <div className="col-12 col-md-6 col-lg-3 text-center mt-5">
        <Images src = {abtract} title = {title} height = {height} />
        </div>
<img src="" alt="" />
        <h3 className='text-center mb-5 mt-3 '><strong>HOW IT IS GOING !</strong> </h3>
        <div className="col-12 col-md-12 col-lg-6  con-txt" >
        Lorem ipsum dolor sit, amet consectetur adipisicing
         elit. Molestias deserunt numquam nobis corporis
          animi cum omnis odio dolores. Eaque, maxime! 
          Et ut neque deleniti ratione ipsa exercitationem 
          optio recusandae officiis tempora reprehenderit
           ipsum consectetur odit, non eius, nostrum 
           nesciunt fugiat quae animi eligendi odio 
           commodi. Similique, quas repellat. Aliquid e
           nim minima, assumenda at ab aperiam id, porr
           o ut blanditiis molestiae maxime obcaecati t
           otam fugiat temporibus praesentium numquam, 
           labore quis quo rem soluta nihil aliquam nes
           ciunt! Necessitatibus explicabo natus deseru
           nt doloremque fugiat quae consectetur et volu
           ptatibus saepe expedita doloribus adipisci su
           scipit est rerum minima nulla dolor soluta, od
           io reiciendis voluptates placeat.
      </div>

      
      <div className="col-12 col-md-12 col-lg-6 about-img mb-3" >
      
      </div>
      </div>

    </div>
   </>
  )
}
