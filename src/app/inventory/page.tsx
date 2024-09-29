import DashboardLayout from '@/components/layout/dashboard'
import { AddItemButton, ItemList } from '@/components/modules/inventory'
import React from 'react'

export default function Inventory() {
  return (
    <DashboardLayout>
      <div className='flex flex-row justify-between'>
        <h1 className="text-3xl font-bold">Inventory</h1>
        <AddItemButton />
      </div>
      <ItemList />
    </DashboardLayout>
  )
}
