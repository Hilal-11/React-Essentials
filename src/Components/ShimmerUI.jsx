import React from 'react'
import './Shammer.css'
function ShimmerUI() {
  return (
    <div className=' w-full h-auto flex flex-wrap gap-20 justify-evenly'>
        {
            Array(30).fill("").map((e , index) => (
                <div key={index} id='shammerUI' className='w-[420px] h-[440px] bg-slate-900 rounded-2xl shadow-sm shadow-slate-700'></div>
            ))
        }
        <br />
        <br />
    </div>
  )
}

export default ShimmerUI