import React from 'react'
import Link from "next/link"

function LinkButton({name, rota}: any) {
  return (
    <Link href={rota}>
            <button className="w-[13vw] h-[5vh] bg-ivory rounded-[20px]"> {name} </button>
    </Link>
  )
}

export default LinkButton