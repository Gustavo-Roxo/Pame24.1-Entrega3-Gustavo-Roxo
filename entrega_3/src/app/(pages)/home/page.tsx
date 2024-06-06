import React from 'react'
import Header from '@/app/componentes/header'
import Side from '@/app/componentes/side'

function Home() {
  return (
    <div className=' h-screen w-screen'>
        <Header></Header>
        <Side></Side>
        <div className=' absolute right-0 bottom-0 h-[85vh] w-[70vw] flex justify-center'>
            <div className=' mt-5 h-[10vh] w-[65vw] bg-slate-700 rounded-full flex justify-center text-slate-50 items-center text-3xl'>
                <h1> Publicações Recentes </h1>
            </div>
        </div>
    </div>
  )
}

export default Home