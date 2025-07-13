import Image from 'next/image'
import React from 'react'

export default function FuniroFurniture() {
  return (
    <main>
    <div className='flex flex-wrap px-4'>
<div className='flex-1/4 max-w-1/4'>
{
  Array.from({length:10}).map((item, i)=><Image key={i} src={'/'} width={200} height={200} alt=''/>)
}
  
</div>
    </div>
    </main>
  )
}
