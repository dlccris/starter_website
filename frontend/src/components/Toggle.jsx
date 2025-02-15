import React, { useState } from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5'

const Toggle = () => {
  const [dark, setDark] = useState(false)

  const darkModeHandler = () => {
    setDark(!dark)
    document.body.classList.toggle('dark')
  }

  return (
    <>
    <div className='relative inline-flex cursor-pointer select-none items-center'>
      <div className='bg-yellow-400 shadow-card flex h-[46px] w-[82px] items-center justify-center rounded-full'>
         <button onClick={() => darkModeHandler()}>
          { dark && <IoSunny /> }
          { !dark && <IoMoon /> }
        </button>
      </div>
    </div>

    </>
  )
}

export default Toggle
