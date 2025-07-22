import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Heart } from 'lucide-react'
import { Input } from '../ui/input'

export default function HeartButton() {
  return (
    <Popover>
        <PopoverTrigger>
          <Heart />
        </PopoverTrigger>
        <PopoverContent>
          <Input />
        </PopoverContent>
      </Popover>
  )
}
