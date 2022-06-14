import React, {useState} from 'react'
import redribbon from '../images/redribbon.png'
import clock from '../images/clock.png'
import pricetag from '../images/pricetag.png'
export default function Cartcomp(props) {
    const [myDelete, setMyDelete] = useState({
        display : 'none'
    })
    const toggleStyle = ()=>{
        if(myDelete.display === 'none'){
            setMyDelete({ 
                display : 'inline'
            })
        }
        else{
            setMyDelete({ 
                display : 'none'
            })
        }
    }
  return (
    <div>
      <div href="/" className="flex justify-between border-b border-black dark:hover:bg-black px-6">
                <div className='flex'>
                    <input className='self-center' type='checkbox' onClick={toggleStyle}></input>
                    <div className='flex p-4 space-x-4 ml-4' >
                        <div className='self-center'>
                        <img src={redribbon} alt='redribbon'/>
                        </div>
                        <div className='text-lg'>
                            <div className='flex'>
                                {props.setname}
                                <img className='ml-2' src={props.himage} alt='edoimage'></img>
                            </div>
                            <div className='text-white text-sm my-1'>
                                {props.hname}
                            </div>
                            <div className='flex text-gray-400 text-sm my-1'>
                                    <span className='mr-2'>Relevance</span>
                                    <li><span>{props.numfiles} CSV files</span></li>
                                    <li><span>{props.update}</span></li>
                                    <li><span>{props.memsize} MB</span></li>
                            </div>          
                        </div> 
                    </div>
                </div>

                <div className='flex'>
                    <div className='flex flex-col justify-around'>
                        <div className='flex flex-row'>
                            <div className='text-blue-400'>Price</div>
                            <div className='flex-col ml-12'>
                                <div className='text-base text-red-500'>20.5 MPs</div>
                                <div className='text-orange-400 text-sm'>$15.7 USD</div>
                            </div>
                        </div>
                        
                        <div className='flex flex-row'>
                            <div className='text-blue-400'>Duration</div>
                            <div className='flex-col ml-12'>
                                <div className='text-orange-400 text-sm'>6 mon</div>
                            </div>
                        </div> 
                    </div>

                    <div className='ml-6 space-y-4 mt-4'>
                        <img src={pricetag} alt='price'></img>
                        <img src={clock} alt='price'></img>
                    </div>

                    <div>
                        <svg className='mt-1 ml-2' width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1" cy="9" r="1" transform="rotate(-90 1 9)" fill="white"/>
                        <circle cx="1" cy="5" r="1" transform="rotate(-90 1 5)" fill="white"/>
                        <circle cx="1" cy="1" r="1" transform="rotate(-90 1 1)" fill="white"/>
                        </svg>
                    </div>
                </div>
                
                <div className=' self-center' style={myDelete}>
                    <svg  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.3125 7.5H21.5625V5.15625C21.5625 4.12207 20.7217 3.28125 19.6875 3.28125H10.3125C9.27832 3.28125 8.4375 4.12207 8.4375 5.15625V7.5H4.6875C4.16895 7.5 3.75 7.91895 3.75 8.4375V9.375C3.75 9.50391 3.85547 9.60938 3.98438 9.60938H5.75391L6.47754 24.9316C6.52441 25.9307 7.35059 26.7188 8.34961 26.7188H21.6504C22.6523 26.7188 23.4756 25.9336 23.5225 24.9316L24.2461 9.60938H26.0156C26.1445 9.60938 26.25 9.50391 26.25 9.375V8.4375C26.25 7.91895 25.8311 7.5 25.3125 7.5ZM19.4531 7.5H10.5469V5.39062H19.4531V7.5Z" fill="#FF0000"/>
                    </svg>
                </div>
        </div>
    </div>
  )
}
