import React from 'react'
import { Link } from 'react-router-dom'
import Cartcomp from './Cartcomp'


export default function Cart() {
    
  return (
    <div className='cartt mr-10'>
        <div className='mx-4 mt-10'>
            <div className='text-3xl mb-3 font-bold'>
                Your Cart
            </div>
      
        <div className='my-2'>
            Select all
        </div>   
        <Cartcomp setname="Breast Cancer MGH (Diagnostic) Data Set" hname="Massachusetts General Hospital" update="Updated 2 days ago" memsize="10" />
        <Cartcomp setname="Breast Cancer MGH (Diagnostic) Data Set" hname="Massachusetts General Hospital" update="Sep 07, 2021" memsize="6"  />
        <Cartcomp setname="Breast Cancer Sutter Data Set" hname="Sutter Health Hospital" update="Feb 04, 2021" memsize="9"  />
    </div>

    <div className='p-4 mt-4 border-2 border-white'>
        <div>
            <div className='flex text-lg mb-4 font-black'>
                Shipping Address
            </div>
            <p className='text-gray-400'>1388</p>
            <p className='text-gray-400'>Pride Avenue</p>
            <p className='text-gray-400'>Kolkata, West Bengal</p>
            <p className='text-gray-400'>823401</p>
        </div>
        
        <div>
            <div className='flex text-lg my-4 font-black'>
                Payment Method
            </div>
            <p className='text-gray-400'>Cash on Delivery (COD)</p>
        </div>
        <div>
            <div className='flex text-lg my-4 font-black'>
                Coupon card or Gift card
            </div>

            <div className='flex'>
                <div className='border w-40 border-gray-400 p-2'> PQTr576</div>
                <div className='border ml-4 text-black bg-gray-400 w-20 border-gray-400 p-2'> Applied</div>
            </div>
        </div>
        
        <div className='mt-10' >
            <div className='flex p-1 mt-4 justify-between border-t border-t-black'>
                <div>Subtotal</div>
                <div className='text-blue-400 font-bold'>₹1,799.00</div>
            </div>
            <div className='flex p-1  justify-between'>
                <div>Shipping Charge</div>
                <div className='text-blue-400 font-bold'>₹100.00</div>
            </div>
            <div className='flex p-1  justify-between'>
                <div>Discount</div>
                <div className='text-blue-400 font-bold'>₹100.00</div>
            </div>

            <div className='flex p-1 mb-2 justify-between border-t border-t-black'>
                <div>Total</div>
                <div className='text-blue-400 font-bold'>₹1,799.00</div>
            </div>

            <Link to="/Cart/payment" className='cursor-pointer bg-slate-200 px-36 font-extrabold text-black p-2 text-center'>
                Next
            </Link>
        </div>
        


    </div>


    </div>
  )
}
