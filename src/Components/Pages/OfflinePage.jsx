import React from 'react'
function OfflinePage() {
  return (
    <div>
        <div className='w-full h-svh flex justify-center items-center'>
            <div>
                <h1 className='text-4xl font-bold text-center'>You're Offline</h1>
                <p className='font-medium'>Please check your internet connection...</p>
            </div>
        </div>
    </div>
  )
}

export default OfflinePage