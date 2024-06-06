import React from 'react'
import Header from '@/app/componentes/header'
import Side from '@/app/componentes/side'
import Image from "next/image";
import Bell from "../../../../public/notifications_24dp_FILL0_wght400_GRAD0_opsz24.png"

function Notificações() {
  return (
    <div className=' w-screen h-screen'>
      <Header></Header>
      <Side></Side>
      <div className=' absolute right-0 bottom-0 h-[85vh] w-[70vw] flex items-center justify-center'>
            <div className='flex-col text-3xl justify-center text-center h-[75vh] w-[60vw] bg-beje2'>
                <h1 className='mt-5'>Notificações</h1>

                <div className='pl-5 mt-5 ml-10 h-[10vh] w-[40vw] flex items-center bg-beje rounded-2xl'>
                    <Image className=" h-[6vh] w-[3vw] rounded-full mr-5" src={Bell} alt=''></Image>
                    <h2 className=' text-xl text-slate-200'>Bianca te seguiu</h2>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Notificações