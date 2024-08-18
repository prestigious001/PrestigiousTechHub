import React from 'react'

export default function GetStarted() {
  return (
   <>
   <div className="container">
    <div className="row">
      <div className="col-3"></div>
      <div className="col-8 col-md-6 col-lg-6">

         <form action="">
        <h3 className='text-center mt-2 mb-3'><strong>Fill in your Information Correctly</strong></h3>
        <label htmlFor=""><strong>FullName</strong> </label> <br />
        <input type="text" placeholder='enter your fullname . .'  className="form-control " autoFocus/><br />

        <label htmlFor=""><strong>Email Address</strong> </label> <br />
        <input type="text" placeholder='enter your email address . .'  className="form-control"/><br />

        <label htmlFor=""><strong>Mobile Number</strong> </label> <br />
        <input type="text" placeholder='enter your mobile number . .'  className="form-control"/><br />

        <label htmlFor=""><strong>Password</strong> </label> <br />
        <input type="text" placeholder='create a password . .'  className="form-control"/><br />

        <label htmlFor=""><strong>Confirm Password</strong> </label> <br />
        <input type="text" placeholder='create a confirm password . .'  className="form-control"/><br />
        {/* <div className='agree'>
              I accept the Terms & Condition of Prestigious Tech Hub
            <input type="checkbox" className='' />  
        </div> */}
               <button className='btn btn-primary  form-control' type='submit'>
                Create account 
               </button>
      
      </form>
      </div>
      <div className="col-3"></div>
     
    </div>
   </div>
   
   
   </>
  )
}
