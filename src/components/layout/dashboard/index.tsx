'use client'

import React, { ReactNode, useState, useEffect } from 'react'
import NavBar from '@/components/common/navbar'
import { LOADER } from '@/utils/constants/app_constants'

export default function DashboardLayout({ children } : { children: ReactNode}) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, LOADER.onboarding.timeout)
    
    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className='flex flex-row'>
      <NavBar />
      <div className="p-4 flex flex-col w-full h-screen">
        {children}
      </div>
    </div>
  )
}
