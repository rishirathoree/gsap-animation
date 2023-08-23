import React, { useEffect, useRef } from 'react'

const Navbar = () => {
    return (
        <>
    <div className='flex header items-center justify-between p-8 w-full border-b-[1px] border-white/5 fixed top-0 right-0'>
        <span><p className='font-semibold text-sm text-white'>About</p></span>
        <span className=''><p className='font-semibold text-white text-lg'>Guilia</p></span>
        <span><p className='font-semibold text-sm text-white'>Contact</p></span>
    </div>
    </>
  )
}

export default Navbar
// const navbar = useRef()
// useEffect(()=>{console.log(navbar.current.offsetHeight)},[])
// height is 93