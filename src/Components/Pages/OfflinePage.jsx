import React from 'react'
function OfflinePage() {
  return (
    <div>
        <div className='w-full h-svh my-20'>
          <div className='catoon_container mx-auto py-20'>
            <div className='mx-auto w-[80px] h-[80px] rounded-full shadow-xl ring-1 shadow-slate-800'></div>
            <div className='mx-auto w-[200px] h-[200px] rounded-full shadow-xl ring-1 shadow-slate-800 flex justify-center items-center'>
              <h1 className='font-bold text-2xl'>Fuck Oops!!!</h1>
            </div>
            <div className='flex relative -top-10'>
              <div className='mx-auto w-[60px] h-[60px] rounded-full shadow-xl ring-1 shadow-slate-800'></div>
              <div className='mx-auto w-[60px] h-[60px] rounded-full shadow-xl ring-1 shadow-slate-800'></div>
            </div>
          </div>
          <br />
            <div className='mx-auto '>
                <h1 className='text-4xl font-bold text-center'>You're Offline</h1>
                <p className='font-medium text-center'>Please check your internet connection...</p>
            </div>
        </div>
    </div>
  )
}

export default OfflinePage