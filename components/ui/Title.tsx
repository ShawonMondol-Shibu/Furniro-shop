import React from 'react'

export default function Title({children, className}:{children:React.ReactNode, className:string}) {
  return (
    <h2 className={`${{className}} text-4xl font-bold text-(--textSecondary)`}>{children}</h2>
  )
}
