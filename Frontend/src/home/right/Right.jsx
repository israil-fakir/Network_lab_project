import React from 'react'
import Chatuser from '../left/Chatuser'
import Chatmessage from './Chatmessage'

export default function Right() {
  return (
    <>
    <div className='w-[70%]  bg-slate-800 text-white'>
       <Chatuser></Chatuser>
       <Chatmessage></Chatmessage>     
    </div>
    </>
    
  )
}
