import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function Header() {
  return (
    <header>
        <Carousel>
            <CarouselContent>
                <CarouselItem className=' relative'> 
                <Image src={'/images/header-banner.png'} width={1000} height={1000} alt='header banner image' className='w-full h-[90vh]'/>
                <div className='bg-(--bgPrimary) w-[643px] p-6 fixed top-[40%] right-[5%]'>
<p>New Arrival</p>
<h1 className='text-5xl font-bold text-(--textPrimary)'>Discover Our New Collection</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
<Button variant={'default'} size={'lg'} className='border-0 px-10 py-6'>BUY NOW</Button>
                </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    </header>
  )
}
