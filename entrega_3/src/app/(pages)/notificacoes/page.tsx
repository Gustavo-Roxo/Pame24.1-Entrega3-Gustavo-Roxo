import React from 'react'
import Header from '@/app/componentes/header'
import Side from '@/app/componentes/side'

function Notificações() {
  return (
    <div className=' w-screen h-screen'>
      <Header></Header>
      <Side></Side>
      <div className=' absolute right-0 bottom-0 h-[85vh] w-[70vw] flex items-center justify-center'>
            <div className=' flex text-3xl justify-center h-[75vh] w-[60vw] bg-beje2'>
                <h1 className='mt-5'>Notificações</h1>
            </div>
        </div>
    </div>
  )
}

export default Notificações