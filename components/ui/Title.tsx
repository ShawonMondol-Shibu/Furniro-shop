import { cn } from '@/lib/utils'
import React from 'react'

export default function Title({children, className}:{children:React.ReactNode, className:string}) {
  return (
    <h2 className={cn("text-[40px] font-bold text-(--textSecondary)", className)}>{children}</h2>
  )
}
