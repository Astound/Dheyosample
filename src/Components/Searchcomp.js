import React from 'react'
import redribbon from './images/redribbon.png'

export default function Searchcomp() {
  return (
    <div>
      <div href="/" className="flex py-4   border-t border-black  dark:hover:bg-black">
                <div className='mr-2 self-center'>
                  <img src={redribbon} alt='redribbon'/>
                </div>
                <div className='text-lg'>
                  Breast Cancer MGH (Diagnostic) Data Set
                  <div className='text-sm'>
                    Massachusetts General hospital
                  </div>
                  <div className='flex text-gray-400 text-sm'>
                        <span className='mr-2'>Relevance: 10.0</span>
                        <li><span>6 CSV Files</span></li>
                        <li><span>Updated 2 days ago</span></li>
                        <li><span>9 MB</span></li>
                  </div>                    
                </div>       
        </div>
    </div>
  )
}
