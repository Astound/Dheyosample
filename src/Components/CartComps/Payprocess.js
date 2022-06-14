import React from 'react'
import captcha from '../images/captcha.png'

export default function Payprocess() {
  return (
    <div className='m-4 payprocess'>
      <div className='border border-white p-4'>
          <div className='text-3xl font-bold'>
            Payment Process
          </div>
          <div className='paydetails my-8'>
            <div className='space-y-2'>
              <h4 className='text-gray-400'>Sellers</h4>
              <div className='flex'>
                <div className='mt-6 space-y-4'>
                    <div>Massachusetts General Hos.</div>
                    <div>Sutter Health Hospital</div>
                </div>
              </div>
            </div>
            <div className='space-y-2'>
              <h4 className='text-gray-400 flex justify-center'>Records</h4>
              <div className=' flex justify-center '>
                <div className='mt-6 space-y-4'>
                  <div>10</div>
                  <div>10</div>
                </div>
              </div>
                
                
            </div>
            <div className='space-y-2'>
              <h4 className='text-gray-400 flex justify-center'>
                Price
              </h4>
              <div className='payprice flex justify-items-center'>
                <div className='text-blue-500'>
                  <div>MPs</div>
                  <div className='space-y-4'> 
                    <div>72.5</div>
                    <div>33.0</div>
                  </div>
                </div>
                <div>
                  <div>USD</div>
                  <div className='space-y-4'>
                    <div>45.8</div>
                    <div>25.6</div>
                  </div>
                </div>
              </div>
            </div>
            


          </div>

      <div>
          <div className='flex justify-between ml-40 mr-28 pr-1'>
            <div >Gas Fees</div>
            <div className='text-blue-500'>1.5</div>
          </div>
          <div className='flex my-2 justify-between ml-40 mr-28 pr-1'>
            <div >Total</div>
            <div className='text-blue-500 font-bold'>116.0</div>
          </div>
          <div className='flex my-2 justify-center ml-32 mr-28 pr-1'>
            <div className='my-2'>
              <img src={captcha} alt='captcha'></img>
            </div>  
          </div>
      </div>
      </div>

      
    </div>
  )
}
