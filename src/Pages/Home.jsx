import React from 'react';
import Courses from '../Component/Courses';

// import Cover from '../images/Cover.png';
// import { useState,useEffect } from 'react';


export default function Home() {
  return (
   <>
   <div className="container-fliud home">
    <div className="row">
      <div className='cover-img'>
          <div className="container">
            <div className="row text-white text-center">
              <div className="col-lg-2"></div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <h1 className=' service'>
                 Availiable Courses<br />
                </h1>
                <h1 className='text-warning bg-ligh p-1 rounded-5'>
                  <b><Courses/></b>
               
                </h1>
                <p className='paragraph'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing 
                  elit. Atque nesciunt doloremque soluta recusandae
                   perferendis ipsa laboriosam odio pariatur derjf kw sdww
                    exercitationem. Dignissimos nostrum ehhd jk
                    repellendus quae eum expedita quod 
                    ipsum. Debitis, excepturi cupiditate.
                </p>
                <button className='btn signin  btn-lg btn-outline-light '>Sign In</button>
                <button className='btn btn-primary text-white get-btn'>
                  Get Started
                </button>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
          
      </div>
    </div>

    <div>
      <div className="content">

      </div>
    </div>
   </div>
   </>
  )
}
