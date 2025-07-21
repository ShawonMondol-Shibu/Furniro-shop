import { Button } from '@/components/ui/button'
import React from 'react'

export default function ExtraDetails() {
 
  const handleDesc = ()=>{
alert('description')
}
const handleInfo = ()=>{
  alert('information')
  
}
const handleReview = ()=>{
    alert('review')

  }
  return (
    <div>
      <div>
        <Button onClick={handleDesc}>Description</Button>
        <Button onClick={handleInfo}>info</Button>
        <Button onClick={handleReview}>review</Button>
        {
""
        }
      </div>
    </div>
  )
}
