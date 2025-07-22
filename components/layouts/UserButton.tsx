import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { User2 } from 'lucide-react'
import { Input } from '../ui/input'

export default function UserButton() {
  return (
    <Popover>
        <PopoverTrigger>
          <User2 />
        </PopoverTrigger>
        <PopoverContent>
          <Input />
        </PopoverContent>
      </Popover>
  )
}
