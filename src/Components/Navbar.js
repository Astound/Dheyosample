import React, {useState} from 'react'
import user from './images/user.png' 
import dheyologo from './images/dheyologo.png' 
import { Link } from 'react-router-dom'

export default function Navbar() {
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
    document.getElementById('searchdrop').display='block';
    console.log(document.getElementById('searchdrop').display);
}

const [text, setText] = useState(''); 
  return (
    <>
      <div className="navitem flex items-center font-bold mx-2 text-lg">
        <img className='mx-2' src={dheyologo} width='48px' alt="" />
          Buyer Wallet
      </div>
      
      <div className="navitem mt-2 w-96" > 
                <div className="input-group flex">
                    <input type="search" id='search' value={text} onChange={handleOnChange} className="form-control relative flex-auto min-w-0 block w-full px-3 text-base font-normal   bg-clip-padding transition ease-in-out m-0  focus:border-blue-600 focus:outline-none" placeholder="Search for datasets..." aria-label="Search" aria-describedby="button-addon2"/>
                    <Link to='/search' className="btn px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 rounded hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                        SEARCH
                    </Link>
                </div>
                    <ul class="dropdown-menu2 hidden w-96 absolute bg-zinc-700 border-b border-black text-white pt-1">
                      <li class=""><a class="rounded-t  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">Lorem Epsum</a></li>
                      <li class=""><a class="rounded-t  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">Lorem Epsum</a></li>
                      <li class=""><a class=" hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">Lorem Epsum Us</a></li>
                      <li class=""><a class="rounded-b  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">Lorem Epsum</a></li>
                      <li class=""><a class="rounded-b  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">Lorem Epsum</a></li>
                      <li class=""><a class="rounded-b border-b border-black hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">Lorem Epsum</a></li>
                      <li class="flex-row rounded-b  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                        <div className='flex  my-2 justify-between'>
                          <div>Saved Searches</div>
                          <div className='text-blue-400'>manage</div>
                        </div>
                        <div>
                          <span className='border m-3 text-sm p-1 rounded-xl border-blue-400'>Breast Cancer</span>
                          <span className='border m-3 text-sm p-1 rounded-xl border-blue-400'>lorem Ipsum</span>
                        </div>
                        <div className='mt-2'>
                          <span className='border m-3 text-sm p-1 rounded-xl border-blue-400'>Breast Cancer</span>

                        </div>
                      </li>
                    </ul>
                  
      </div>
      
      <div className='navitem items-center flex space-x-4 mr-4'>
        <svg width="26.5px" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5937 15C13.5937 15.373 13.7419 15.7306 14.0056 15.9944C14.2693 16.2581 14.627 16.4062 15 16.4062C15.3729 16.4062 15.7306 16.2581 15.9944 15.9944C16.2581 15.7306 16.4062 15.373 16.4062 15C16.4062 14.627 16.2581 14.2694 15.9944 14.0056C15.7306 13.7419 15.3729 13.5938 15 13.5938C14.627 13.5938 14.2693 13.7419 14.0056 14.0056C13.7419 14.2694 13.5937 14.627 13.5937 15ZM19.4531 15C19.4531 15.373 19.6013 15.7306 19.865 15.9944C20.1287 16.2581 20.4864 16.4062 20.8594 16.4062C21.2323 16.4062 21.59 16.2581 21.8537 15.9944C22.1175 15.7306 22.2656 15.373 22.2656 15C22.2656 14.627 22.1175 14.2694 21.8537 14.0056C21.59 13.7419 21.2323 13.5938 20.8594 13.5938C20.4864 13.5938 20.1287 13.7419 19.865 14.0056C19.6013 14.2694 19.4531 14.627 19.4531 15ZM7.73436 15C7.73436 15.373 7.88252 15.7306 8.14624 15.9944C8.40996 16.2581 8.76765 16.4062 9.14061 16.4062C9.51357 16.4062 9.87126 16.2581 10.135 15.9944C10.3987 15.7306 10.5469 15.373 10.5469 15C10.5469 14.627 10.3987 14.2694 10.135 14.0056C9.87126 13.7419 9.51357 13.5938 9.14061 13.5938C8.76765 13.5938 8.40996 13.7419 8.14624 14.0056C7.88252 14.2694 7.73436 14.627 7.73436 15ZM27.1055 9.91406C26.4433 8.34082 25.4941 6.92871 24.2842 5.71582C23.0827 4.50995 21.6563 3.55143 20.0859 2.89453C18.4746 2.21777 16.7637 1.875 15 1.875H14.9414C13.166 1.88379 11.4463 2.23535 9.82909 2.92676C8.27212 3.59039 6.85915 4.55062 5.66893 5.75391C4.47069 6.96387 3.53026 8.37012 2.87987 9.9375C2.20604 11.5605 1.86619 13.2861 1.87498 15.0615C1.88492 17.0961 2.36627 19.1007 3.28123 20.918V25.3711C3.28123 25.7285 3.42322 26.0713 3.67595 26.324C3.92869 26.5768 4.27147 26.7188 4.62889 26.7188H9.08495C10.9022 27.6337 12.9068 28.1151 14.9414 28.125H15.0029C16.7578 28.125 18.4599 27.7852 20.0625 27.1201C21.625 26.471 23.046 25.5237 24.2461 24.3311C25.456 23.1328 26.4082 21.7324 27.0732 20.1709C27.7646 18.5537 28.1162 16.834 28.125 15.0586C28.1338 13.2744 27.7881 11.543 27.1055 9.91406ZM22.6787 22.7461C20.625 24.7793 17.9004 25.8984 15 25.8984H14.9502C13.1836 25.8896 11.4287 25.4502 9.87889 24.624L9.6328 24.4922H5.5078V20.3672L5.37596 20.1211C4.54979 18.5713 4.11034 16.8164 4.10155 15.0498C4.08983 12.1289 5.20604 9.38672 7.25389 7.32129C9.29881 5.25586 12.0322 4.11328 14.9531 4.10156H15.0029C16.4678 4.10156 17.8887 4.38574 19.2275 4.94824C20.5342 5.49609 21.706 6.28418 22.7139 7.29199C23.7187 8.29688 24.5098 9.47168 25.0576 10.7783C25.626 12.1318 25.9101 13.5674 25.9043 15.0498C25.8867 17.9678 24.7412 20.7012 22.6787 22.7461Z" fill="#B0B0B0"/>
        </svg>
        <svg width="26px" height="29px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.707 19.293L26 16.586V13C25.9969 10.5218 25.075 8.13285 23.4126 6.29498C21.7502 4.45712 19.4654 3.30093 17 3.05V1H15V3.05C12.5346 3.30093 10.2498 4.45712 8.58737 6.29498C6.92498 8.13285 6.0031 10.5218 6 13V16.586L3.293 19.293C3.10545 19.4805 3.00006 19.7348 3 20V23C3 23.2652 3.10536 23.5196 3.29289 23.7071C3.48043 23.8946 3.73478 24 4 24H11V24.777C10.9782 26.0456 11.4254 27.2777 12.2558 28.237C13.0862 29.1964 14.2414 29.8156 15.5 29.976C16.1952 30.0449 16.8971 29.9676 17.5606 29.749C18.2241 29.5304 18.8345 29.1753 19.3525 28.7066C19.8706 28.2379 20.2848 27.666 20.5685 27.0277C20.8522 26.3893 20.9992 25.6986 21 25V24H28C28.2652 24 28.5196 23.8946 28.7071 23.7071C28.8946 23.5196 29 23.2652 29 23V20C28.9999 19.7348 28.8946 19.4805 28.707 19.293ZM19 25C19 25.7956 18.6839 26.5587 18.1213 27.1213C17.5587 27.6839 16.7956 28 16 28C15.2044 28 14.4413 27.6839 13.8787 27.1213C13.3161 26.5587 13 25.7956 13 25V24H19V25ZM27 22H5V20.414L7.707 17.707C7.89455 17.5195 7.99994 17.2652 8 17V13C8 10.8783 8.84285 8.84344 10.3431 7.34315C11.8434 5.84285 13.8783 5 16 5C18.1217 5 20.1566 5.84285 21.6569 7.34315C23.1571 8.84344 24 10.8783 24 13V17C24.0001 17.2652 24.1054 17.5195 24.293 17.707L27 20.414V22Z" fill="#B0B0B0"/>
        </svg>
           
        <img src={user} alt="" />
        <div>
          <div class="dropdown inline-block relative">
            <button class="rounded inline-flex items-center">
              <span class="mr-1">
                <svg className='mt-3' width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 9L17 1" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span>
             </button>

            <ul class="dropdown-menu w-40 -ml-32 absolute hidden bg-zinc-700 text-white pt-1">
              <li class=""><a class="rounded-t  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">Settings</a></li>
              <li class=""><a class="rounded-t  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">About</a></li>
              <li class=""><a class=" hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">Contact Us</a></li>
              <li class=""><a class="rounded-b  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">FAQ</a></li>
              <li class=""><a class="flex-row rounded-b  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/">
                <div className='flex'>
                  <span>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 16.25V13.75H8.75V10L2.5 15L8.75 20V16.25H20Z" fill="#FF0000"/>
                    <path d="M25 3.75H13.75C12.3712 3.75 11.25 4.87125 11.25 6.25V11.25H13.75V6.25H25V23.75H13.75V18.75H11.25V23.75C11.25 25.1287 12.3712 26.25 13.75 26.25H25C26.3787 26.25 27.5 25.1287 27.5 23.75V6.25C27.5 4.87125 26.3787 3.75 25 3.75Z" fill="#FF0000"/>
                    </svg>
                  </span>
                  <span className='text-red-600 ml-2'>Logout</span>
                </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      
      </div>
    </>
  )
}
