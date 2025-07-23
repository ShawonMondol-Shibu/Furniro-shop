import HeaderBreadCrumb from '@/components/layouts/HeaderBreadCrumb'
import Services from '@/components/layouts/Services'
import React from 'react'

export default function Page() {
  return (
    <div>
        <HeaderBreadCrumb title='Product Comparison' breadCrumbPage='Home' breadCrumbLink='Comparison' />
        <Services/>
    </div>
  )
}
