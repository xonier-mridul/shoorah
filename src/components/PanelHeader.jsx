import React from 'react'



import { FaRegBell } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import UserImage from "../assets/user-image.png"

const PanelHeader = () => {
  return (
    <>
      <div className='w-full sticky flex items-center justify-between top-0 left-0 z-20 py-6 bg-[#F1F5F9]'>
         <div className='flex flex-col gap-5 w-1/2'>
            <h2 className='text-2xl font-semibold'>Instant Support</h2>
            <p>Expert support, right when it's needed most. Give your team the backing they deserve, with instant access to professionals who can help today.</p>
         </div>
         <div className='flex items-center justify-end gap-5 w-1/2'>
             <span className='bg-white h-10 w-10 rounded-full border-1 flex justify-center items-center border-[#E7E8EA]'><BsBell  className='text-xl'/></span>
             <div className='w-[247px] flex gap-2 items-center bg-white p-4 rounded-2xl border-[#E7E8EA] border-1'>
                <div className='w-12 h-12 '>
                   <img className='w-full rounded-full object-cover' src={UserImage} alt="user image" />
                </div>
                <div>
                    <h3 className='font-semibold '>Reuben Hale</h3>
                    <span className='text-[12px] text-neutral-400'> Sub Admin </span>
                </div>

             </div>
         </div>
      </div>
    </>
  )
}

export default PanelHeader
