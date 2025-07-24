"use client"
import z from 'zod'
import React from 'react'

const formSchema = z.object({
  firstName: z.string().min(2,{
message: "Please enter your first name"
  }),
  lastName: z.string().min(2,{
    message:'Please enter your last name'
  }),
  company:z.string(),
  country:z.string()
})
export default function CheckoutForm() {
  return (
    <section>
         
    </section>
  )
}
