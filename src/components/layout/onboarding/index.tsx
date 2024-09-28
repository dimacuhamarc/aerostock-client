import React, { ReactNode } from 'react'

export default function OnboardingLayout({ children } : { children: ReactNode}) {
  return (
    <div className='h-full w-full px-96 py-56 flex flex-row'>{children}</div>
  )
}
