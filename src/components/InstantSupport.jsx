import React from 'react'
import { Link } from 'react-router-dom'

const InstantSupport = () => {
  return (
    <>
      <div className='w-full bg-indigo-600 instant-bg p-4 rounded-2xl'>
        <div className='w-1/3 flex flex-col gap-2'>
           <h2 className='font-semibold text-white text-xl '>Instant Support</h2>
           <p className='text-white text-[13px]'>Get instant support for your team when they need it most. Connect with an experts and receive assistance today!</p>
           <Link to={'/plans'} className='bg-white py-2 mt-6 px-6 rounded-full w-fit text-sm text-indigo-600'> Get Support
           </Link>

        </div>

      </div>
    </>
  )
}

export default InstantSupport
