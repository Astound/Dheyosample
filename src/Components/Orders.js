import React from 'react'
import redribbon from './images/redribbon.png'

export default function Orders() {
  return (
    <div className='ml-5 mr-16'>
      <div className='font-extrabold text-3xl my-7'>
        Your Orders
      </div>
      <div href="/" className="my-4 order rounded-md p-4 border border-gray-400  dark:hover:bg-black">

        <div>
            <div className='flex'>
                  <div className='mr-2 self-center'>
                    <img className='flex' src={redribbon} alt='redribbon'/>
                  </div>
                  <div className='text-lg'>
                    Breast Cancer MGH (Diagnostic) Data Set
                    <div className='text-gray-400 text-base'>
                      Massachusetts General hospital
                    </div>
                      <div className='flex text-gray-400 text-sm'>
                          <span className='mr-2'>Relevance</span>
                          <li><span>6 CSV Files</span></li>
                          <li><span>Updated 2 days ago</span></li>
                          <li><span>9 MB</span></li>
                      </div>                    
                          
                  </div>
              </div>

                <div className='flex mt-3 ml-9   text-gray-400 text-sm justify-between'>
                  <div>Date purchased: 8 May 2022</div>
                  <div>Transaction ID: 00120112RTD</div>
                  <div>Price: $50 DTs</div>
                </div>
        </div>

        <div className='flex justify-around items-center ml-20'>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 2.5H5C3.62125 2.5 2.5 3.62125 2.5 5V20C2.5 21.3787 3.62125 22.5 5 22.5H8.75V27.2087L16.5963 22.5H25C26.3787 22.5 27.5 21.3787 27.5 20V5C27.5 3.62125 26.3787 2.5 25 2.5ZM25 20H15.9037L11.25 22.7913V20H5V5H25V20Z" fill="#B0B0B0"/>
          <path d="M13.75 7.5H16.25V13.75H13.75V7.5ZM13.75 15H16.25V17.5H13.75V15Z" fill="#B0B0B0"/>
          </svg>

          <p className='invoice border border-blue-400 p-2 rounded-lg'>
            View Invoice
          </p>

          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18.75L20 13.75M15 18.75V3.75V18.75ZM15 18.75L10 13.75L15 18.75Z" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.5 21.25L3.27625 24.3563C3.41144 24.8971 3.72353 25.3772 4.16291 25.7204C4.6023 26.0635 5.14376 26.2499 5.70125 26.25H24.2987C24.8562 26.2499 25.3977 26.0635 25.8371 25.7204C26.2765 25.3772 26.5886 24.8971 26.7237 24.3563L27.5 21.25" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </div>

      </div>
      
      <div href="/" className="order rounded-md p-4 border border-gray-400  dark:hover:bg-black">

        <div>
            <div className='flex'>
                  <div className='mr-2 self-center'>
                    <img className='flex' src={redribbon} alt='redribbon'/>
                  </div>
                  <div className='text-lg'>
                    Breast Cancer MGH (Diagnostic) Data Set
                    <div className='text-gray-400 text-base'>
                      Massachusetts General hospital
                    </div>
                      <div className='flex text-gray-400 text-sm'>
                          <span className='mr-2'>Relevance</span>
                          <li><span>6 CSV Files</span></li>
                          <li><span>Updated 2 days ago</span></li>
                          <li><span>9 MB</span></li>
                      </div>                    
                          
                  </div>
              </div>

                <div className='flex mt-3 ml-9   text-gray-400 text-sm justify-between'>
                  <div>Date purchased: 8 May 2022</div>
                  <div>Transaction ID: 00120112RTD</div>
                  <div>Price: $50 DTs</div>
                </div>
        </div>

        <div className='flex justify-around items-center ml-20'>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 2.5H5C3.62125 2.5 2.5 3.62125 2.5 5V20C2.5 21.3787 3.62125 22.5 5 22.5H8.75V27.2087L16.5963 22.5H25C26.3787 22.5 27.5 21.3787 27.5 20V5C27.5 3.62125 26.3787 2.5 25 2.5ZM25 20H15.9037L11.25 22.7913V20H5V5H25V20Z" fill="#B0B0B0"/>
          <path d="M13.75 7.5H16.25V13.75H13.75V7.5ZM13.75 15H16.25V17.5H13.75V15Z" fill="#B0B0B0"/>
          </svg>

          <span className='border border-blue-400 p-2 rounded-lg'>
            Pending
          </span>

          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3C8.832 3 3 8.832 3 16C3 23.168 8.832 29 16 29C23.168 29 29 23.168 29 16C29 8.832 23.168 3 16 3ZM16 5C22.087 5 27 9.913 27 16C27 22.087 22.087 27 16 27C9.913 27 5 22.087 5 16C5 9.913 9.913 5 16 5ZM12.22 10.78L10.78 12.22L14.564 16L10.782 19.78L12.222 21.22L16 17.437L19.78 21.217L21.22 19.78L17.437 16L21.217 12.22L19.78 10.78L16 14.564L12.22 10.782V10.78Z" fill="#FF0000"/>
          </svg>

          <span className='border border-blue-400 p-2 rounded-lg'>
            Track
          </span>

        </div>

      </div>
    </div>
  )
}
