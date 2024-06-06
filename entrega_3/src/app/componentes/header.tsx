import React from 'react'
import Logo from "../../../public/Design sem nome (1).png"
import Image from "next/image";

function Header() {
  return (
    <div className=" w-screen h-[15vh] bg-beje flex items-center text-center justify-center">
      <div className=" font-extrabold text-2xl flex items-center">
        <Image className=" h-[11vh] w-[5vw] rounded-full m-3" src={Logo} alt=''></Image>
        <h1>WaveConnect</h1>
      </div>
    </div>
  )
}

export default Header