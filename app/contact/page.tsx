import HeaderBreadCrumb from '@/components/layouts/HeaderBreadCrumb'
import Services from '@/components/layouts/Services'
import React from 'react'

export default function Page() {
  return (
    <div>
      <HeaderBreadCrumb title='Contact' breadCrumbPage='Home' breadCrumbLink='Contact' />

      <main className='my-10'>
        <div className='w-2xl text-center m-auto'>
          <h2 className='text-4xl font-semibold'>Get In Touch With Us</h2>
          <p className='text-base font-normal'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <Services/>
      </main>
    </div>
  )
}
