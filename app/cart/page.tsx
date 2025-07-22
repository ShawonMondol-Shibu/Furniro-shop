import HeaderBreadCrumb from '@/components/layouts/HeaderBreadCrumb'
import Services from '@/components/layouts/Services'
import React from 'react'
import CartItem from './CartItem'

export default function Page() {
  return (
    <main>
      <HeaderBreadCrumb title='Cart' breadCrumbLink='Cart' breadCrumbPage='Home' />
      <section>
        <div>
          <CartItem/>
        </div>
      </section>
        <Services/>
    </main>
  )
}
