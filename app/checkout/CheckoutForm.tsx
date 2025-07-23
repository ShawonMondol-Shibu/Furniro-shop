import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function CheckoutForm() {
  return (
    <section>
         <div className="flex gap-5 items-center">
            <div className="space-y-4">
              <Label> Frist Name </Label>
              <Input />
            </div>
            <div className="space-y-4">
              <Label> Frist Name </Label>
              <Input />
            </div>
          </div>
    </section>
  )
}
