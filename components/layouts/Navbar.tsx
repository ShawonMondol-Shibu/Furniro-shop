import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const navLink = [
        {name:"Home", url:"#"},
        {name:"Shop", url:"#"},
        {name:"About", url:"#"},
        {name:"Contact", url:"#"}
    ]
  return (
    <nav className='flex items-center justify-between gap-10'>
        <div className='flex items-center gap-2'>
            <Image src={'/images/logo.png'} width={50} height={50} alt='top navbar logo image'/>
            <span className='text-4xl font-bold'>Furniro</span>
        </div>

        <>
            <ul>
                {
                    navLink.map((nav, i:number)=><li key={i}>
                    <Link href={nav.url}>{nav.name}</Link>
                </li>)
                }
                
            </ul>
        </>
    
    </nav>
  )
}
