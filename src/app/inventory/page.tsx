import DashboardLayout from '@/components/layout/dashboard'
import { ItemList } from '@/components/modules/inventory'
import React from 'react'

export default function Inventory() {
  return (
    <DashboardLayout>
      <div className='flex flex-row justify-between'>
        <h1 className="text-3xl font-bold">Inventory</h1>
        <button className="btn btn-primary">Add Item</button>
      </div>
      <ItemList />
    </DashboardLayout>
  )
}
