'use client'

import Loader from '@/components/common/loader'
import React, { ReactNode, useState, useEffect } from 'react'
import { LOADER } from '@/utils/constants/app_constants'

export default function OnboardingLayout({ children } : { children: ReactNode}) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, LOADER.onboarding.timeout)
    
    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer)
  }, [])


  return (
    <div className='flex items-center justify-center min-h-screen bg-pattern-1'>
      {loading ? 
      (
        <Loader />
      ): (
        <div className="w-full max-w-md max-sm:h-screen max-sm:shadow-none max-sm:place-content-center p-8 space-y-6 bg-white rounded-xl shadow-md">
          {children}
        </div>
      )}
    </div>
  )
}
