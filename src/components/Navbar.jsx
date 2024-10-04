import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex p-5 text-black  drop-shadow-2xl '>
        <p className='text-black font-bold text-3xl cursor-pointer'><a href="/">Unite</a></p>
        <div className=' ml-7 mt-1 text-xl hover:underline font-extralight'>
            <a href="/learn"><button>Learn</button></a>
        </div>
        
        <div className='ml-4 mt-1 text-xl hover:underline font-extralight'>
            <a href="/battle"><button>Battle</button></a>
        </div>
        <div className='text-1xl font-bold flex justify-end w-full mr-10 hover:underline'>
            <a href="/login">
            <button>Login/Signup</button>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
