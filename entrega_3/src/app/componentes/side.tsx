import React from 'react'
import Busca from "../../../public/search.png"
import Image from "next/image";
import Home_ from "../../../public/home_24dp_FILL0_wght400_GRAD0_opsz24.png"
import Logout from "../../../public/logout.png"
import Perfil from "../../../public/person_24dp_FILL0_wght400_GRAD0_opsz24.png"
import Bell from "../../../public/notifications_24dp_FILL0_wght400_GRAD0_opsz24.png"
import Link from "next/link"

function Side() {
  return (
    <div className=' pt-8 h-[85vh] w-[30vw] bg-beje2'>
        <div className='mb-10 flex h-[6vh] w-[30vw] items-center'>
          <Image className="mt-6 h-[6vh] w-[3vw] rounded-full mr-3 ml-3" src={Busca} alt=''></Image>
          <input

          type="text"
          id="busca"
          name="busca"
          required
          placeholder="Buscar"

          className=" mt-7 pl-2 w-[20vw] h-[6vh] rounded-2xl"

          />
        </div>

        <div>
          <Link href={"home"} >
            <div className="mb-10 flex h-[6vh] w-[30vw] items-center text-slate-100 text-xl">
              <Image className=" ml-2 mr-5 h-[6vh] w-[3vw]" src={Home_} alt=''></Image>
              <p>Home</p>
            </div>
          </Link>
        </div>
        <div>
        <Link href={"perfil"} >
            <div className="mb-10 flex h-[6vh] w-[30vw] items-center text-slate-100 text-xl">
              <Image className=" ml-2 mr-5 h-[6vh] w-[3vw]" src={Perfil} alt=''></Image>
              <p>Perfil</p>
            </div>
          </Link>
        </div>
        <div>
        <Link href={"notificacoes"} >
            <div className=" mb-10 flex h-[6vh] w-[30vw] items-center text-slate-100 text-xl">
              <Image className=" ml-2 mr-5 h-[6vh] w-[3vw]" src={Bell} alt=''></Image>
              <p>Notificações</p>
            </div>
          </Link>
        </div>
        <div>
        <Link href={"/"} >
            <div className=" flex h-[6vh] w-[30vw] items-center text-slate-100 text-xl">
              <Image className=" ml-2 mr-5 h-[6vh] w-[3vw]" src={Logout} alt=''></Image>
              <p>Logout</p>
            </div>
          </Link>
        </div>
      </div>
  )
}

export default Side