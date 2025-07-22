import HeaderBreadCrumb from '@/components/layouts/HeaderBreadCrumb'
import Services from '@/components/layouts/Services'
import React from 'react'

export default function Page() {
  return (
    <main>
      <HeaderBreadCrumb title='Cart' breadCrumbLink='Cart' breadCrumbPage='Home' />
      <section>
        <div>
          
        </div>
      </section>
        <Services/>
    </main>
  )
}
