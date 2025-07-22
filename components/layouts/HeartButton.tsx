import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Heart } from 'lucide-react'

export default function HeartButton() {
  return (
    <Popover>
        <PopoverTrigger>
          <Heart />
        </PopoverTrigger>
        <PopoverContent>
          <Heart fill='red' />
        </PopoverContent>
      </Popover>
  )
}
