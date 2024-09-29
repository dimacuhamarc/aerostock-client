'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function AddItemButton() {
  const router = useRouter()
  
  function handleOnClick() {
    router.push('/inventory/add-item')
  }
  return (
    <button className="btn btn-primary" onClick={handleOnClick}>Add Item</button>
  )
}
