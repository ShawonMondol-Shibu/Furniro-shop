import HeaderBreadCrumb from '@/components/layouts/HeaderBreadCrumb'
import Services from '@/components/layouts/Services'
import React from 'react'
import CartItem from './CartItem'
import Title from '@/components/ui/Title'
import { Button } from '@/components/ui/button'

export default function Page() {
  const titleGroup = [
    "Product",
    "Price",
    "Quantity",
    "Subtotal",
  ]
  return (
    <main>
      <HeaderBreadCrumb title='Cart' breadCrumbLink='Cart' breadCrumbPage='Home' />
      <section className='flex items-start justify-center gap-10 my-20'>
        <div>
<ul className='p-5 bg-[var(--bgPrimary)] flex items-center gap-5 justify-evenly mb-5 text-base font-medium'>
  {
    titleGroup.map((titles)=><li key={titles}>{titles}</li>)
  }

</ul>
          <CartItem/>
        </div>

        <div className='bg-[var(--bgPrimary)] p-5 space-y-10'>
          <Title className='text-4xl font-semibold'> Cart Totals</Title>
          <div className='text-base font-medium'>
            <p>Subtotal <span className='text-[var(--textGray)]'>Rs. 250,000.00</span> </p>
            <p>Total <span className='text-xl font-medium text-[var(--textPrimary)]'>Rs. 250,000.00</span> </p>
          </div>
          <Button variant={'outline'} className=' bg-[var(--bgPrimary)] hover:bg-[var(--textPrimary)] hover:text-white text-xl font-normal px-8 size-fit'>Check Out</Button>
        </div>
      </section>
        <Services/>
    </main>
  )
}
