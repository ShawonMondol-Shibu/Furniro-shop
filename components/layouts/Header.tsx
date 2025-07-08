import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
        <Carousel>
            <CarouselContent>
                <CarouselItem> 
                <Image src={'/images/header-banner.png'} width={1000} height={1000} alt='header banner image' className='w-full h-full'/>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    </header>
  )
}
