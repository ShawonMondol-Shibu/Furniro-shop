import React from 'react'
import Title from '../ui/Title'
import Image from 'next/image'

export default function BrowseRange() {
  return (
    <main>
      <Title> Browse The Range</Title>
      <div>
<div className='rounded-lg'>
  <Image src={'/images/image.png'} width={381} height={480} alt='range image' className='rounded-lg'/>
  <h3 className='text-2xl font-semibold'>Dining</h3>
</div>
      </div>
    </main>
  )
}
