import React from 'react'
import DashboardLayout from '@/components/layout/dashboard'
import { SingleItem } from '@/components/modules/inventory'

export default function ItemPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout>
      <SingleItem params={params} />
    </DashboardLayout>
  )
}
