import Image from 'next/image'
import React from 'react'

export default function Description() {
  return (
    <div className='space-y-10 grid items-center justify-items-center'>
        <div className='space-y-10 w-5xl'>
            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>

        <div className='flex items-center justify-center gap-10'>
            <Image src={'/images/products/sofa.png'} width={605} height={348} alt='sofa banner'/>
            <Image src={'/images/products/sofa.png'} width={605} height={348} alt='sofa banner'/>
        </div>
    </div>
  )
}
