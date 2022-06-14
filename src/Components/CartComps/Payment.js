import React from 'react'
import Cartcomp2 from './Cartcomp2'
import mgh from '../images/mgh.png'
import sutter from '../images/sutter.png'
import { Link } from 'react-router-dom'

export default function Payment() {
  return (
    <div className='mr-10'>
    <div className='mx-4 mt-10'>
        <div className='text-3xl mb-3 font-bold'>
            Your Cart
        </div>
  
        <div className='my-2'>
            Select all
        </div>   
    
        <Cartcomp2 setname="Breast Cancer MGH (Diagnostic) Data Set" hname="Massachusetts General Hospital" update="Updated 2 days ago" memsize="10"  himage={mgh}/>
        <Cartcomp2 setname="Breast Cancer MGH (Diagnostic) Data Set" hname="Massachusetts General Hospital" update="Sep 07, 2021" memsize="6"  himage={mgh} />
        <Cartcomp2 setname="Breast Cancer Sutter Data Set" hname="Sutter Health Hospital" update="Feb 04, 2021" memsize="9" himage={sutter}  />
    </div>
    <div className='flex justify-end mr-20 mt-4'>
                <div>
                    <div className='flex flex-row mb-8'>
                                <div className='text-blue-400'>Net Price</div>
                                <div className='flex-col ml-12'>
                                    <div className='text-base text-red-500'>20.5 MPs</div>
                                    <div className='text-orange-400 text-sm'>$15.7 USD</div>
                                </div>
                    </div>
                    
                    <Link to="/Cart/paymentprocess" className='cursor-pointer bg-slate-200 font-extrabold text-black p-2 text-center'>
                        Proceed to Payment
                    </Link>
                </div>
    </div>
</div>
  )
}
