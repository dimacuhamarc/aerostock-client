import DashboardLayout from '@/components/layout/dashboard'
import EditItemForm from '@/components/modules/forms/editItem'
import React from 'react'

export default function EditItem({params}: {params: {id: string}}) {
  return (
    <DashboardLayout>
      <EditItemForm params={params} />
    </DashboardLayout>
  )
}
