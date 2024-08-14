import React from 'react'

export default function Footer() {
  return (
   <>
   <div className="container-fluid bg-dark footer mt-2">
    <div className="row text-white p-3">
        <div className="col-lg-4 col-sm-12 text-center">

        <h4 className=''>OUR VISION</h4>
           
        <p className='mt-4'>
            Lorem, ipsum dolor sit amet consectetur
             adipisicing elit. Sed commodi quos d
             oloribus deleniti provident dolores 
             quas corporis harum cumque vel. jeuaa jdskal 
             jsjdq brtsjs
        </p>

        </div>


        <div className="col-lg-4 col-sm-12 text-center">

            <h4 className=''> OUR ADDRESS</h4>
            <p className='mt-4'>
            Lorem, ipsum dolor sit amet consectetur
             adipisicing elit. Sed commodi quos d
             oloribus deleniti provident dolores 
             quas corporis harum cumque vel. jeuaa jdskal 
             jsjdq brtsjs
        </p>
        </div>


        <div className="col-lg-4 text-center">
        <h4 className=''> OUR CONTACT</h4>

        <form action="" className='mt-4'>
            <input type="emal" placeholder='enter email . . ' required /><br />
            <textarea name=""  rows="3" placeholder='enter your message... ' required ></textarea><br />
            <button className='btn text-light btn-outline-primary ft-btn'>SEND</button>
        </form>

        </div>



    </div>
    <p className='text-secondary text-center pb-2'>All rights reserved Prestigious Tech Hub 2024</p>
   </div>
   </>
  )
}
