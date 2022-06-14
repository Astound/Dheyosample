import React from 'react'
import Searchcomp from './Searchcomp'

export default function Searchresults() {
  return (
    <div className='mx-10'>
      <div className='flex mb-4 mt-1 mx-2 text-lg'>
          Showing results for "Breast Cancer". 
          <p className='text-blue-700 ml-4 text-base'>clear</p>
      </div>
      <div className='flex justify-between mb-2 mt-2 mx-2 text-lg'>
          654 Results 
          <p className='flex ml-12'> Sort by: Relevancy
          <svg className='mt-1 mx-1' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2348 6.15234H3.76523C3.36123 6.15234 3.13564 6.57891 3.38584 6.87012L10.1206 14.6795C10.3134 14.903 10.6846 14.903 10.8794 14.6795L17.6142 6.87012C17.8644 6.57891 17.6388 6.15234 17.2348 6.15234Z" fill="#B0B0B0"/>
</svg>
</p>
      </div>
      <div>
      <Searchcomp/>
      <Searchcomp/>
      <Searchcomp/>
      <Searchcomp/>
      <Searchcomp/>
      </div>

      <div className='flex justify-center'>
        <button className='px-3 mt-1 py-2 mx-2 text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white rounded-md'>Prev</button>
        <button className='px-3 mt-1 py-2 mx-2 text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white rounded-md'>1</button>
        <button className='px-3 mt-1 py-2 mx-2 text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white rounded-md'>2</button>
        <button className='px-3 mt-1 py-2 mx-2 text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white rounded-md'>3</button>
        <button className='px-3 mt-1 py-2 mx-2 text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white rounded-md'>4</button>
        <button className='px-3 mt-1 py-2 mx-2 text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white rounded-md'>5</button>
        <button className='px-3 mt-1 py-2 mx-2 text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white rounded-md'>Next</button>
      </div>

    </div>
  )
}
