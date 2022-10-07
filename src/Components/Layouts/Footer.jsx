import React from 'react'
import {FaTwitterSquare} from 'react-icons/fa'
import {BsTelegram} from 'react-icons/bs'

function Footer() {
  return (
    <div className='faqs'>
    <div className=" p-5  ">

     <div className='footericons '>

     < FaTwitterSquare color="#1A91D9 " size={50}/>  &nbsp;&nbsp;&nbsp;&nbsp;
             <BsTelegram color="#D9651F"  size={50}/>
    

      


     </div>
     <hr className='fontcard ' />
     <p className='fontcard text-center mt-5'>Copyright © 2022. All rights reserved by Halloween Floki. Contact: hello@halloweenfloki.co</p>
     
     </div>



    </div>
  )
}

export default Footer