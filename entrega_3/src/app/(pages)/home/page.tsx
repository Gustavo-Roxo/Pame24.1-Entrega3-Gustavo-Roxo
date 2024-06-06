import React from 'react'
import Header from '@/app/componentes/header'
import Side from '@/app/componentes/side'
import Image from "next/image";
import Like from "../../../../public/like.png"
import Post1 from "../../../../public/image1.jpg"
import Share from "../../../../public/repost.png"

function Home() {
  return (
    <div className=' h-screen w-screen'>
        <Header></Header>
        <Side></Side>
        <div className=' absolute right-0 bottom-0 h-[85vh] w-[70vw] flex-col'>
            <div className=' mt-5 h-[10vh] ml-[2vw] w-[65vw] bg-slate-700 rounded-full flex justify-center text-slate-50 items-center text-3xl'>
                <h1> Publicações Recentes </h1>
            </div>

            <div className=' mt-5 ml-[15vw] h-[50vh] w-[40vw] bg-beje2 rounded-2xl flex justify-center'>
                <div>
                    <Image className="mt-5 h-[30vh] w-[30vw]" src={Post1} alt=''></Image>
                    <div className=' mb-5 flex h-[6vh] w-[30vw] items-center'>
                        <button>
                        <Image className="mt-6 h-[6vh] w-[3vw] rounded-full ml-3" src={Share} alt=''></Image>
                        </button>
                        <button>
                            <Image className="mt-6 h-[6vh] w-[3vw] rounded-full mr-3 ml-3" src={Like} alt=''></Image>
                        </button>
                    <input

                    type="text"
                    id="busca"
                    name="busca"
                    required
                    placeholder="Comentarr"

                    className=" mt-7 pl-2 w-[20vw] h-[6vh]"

                    />
                    </div>
                    <h1 className=' text-xl'>Marcos: Bela foto!</h1>
                </div>
            </div>

            <div className='pl-5 mt-5 ml-[15vw] h-[10vh] w-[40vw] flex items-center bg-beje2 rounded-2xl'>
                <h2 className=' text-xl'>Bianca: Bom diaaa!!</h2>
                <button>
                        <Image className=" h-[6vh] w-[3vw] rounded-full ml-3" src={Share} alt=''></Image>
                </button>
                <button>
                    <Image className=" h-[6vh] w-[3vw] rounded-full mr-3 ml-3" src={Like} alt=''></Image>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home