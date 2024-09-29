import DashboardLayout from '@/components/layout/dashboard'
import { SingleItemAuditLog } from '@/components/modules/auditlog'
import React from 'react'

export default function Page({params} : {params: {id: string}}) {
  return (
    <DashboardLayout>
      <SingleItemAuditLog params={params} />
    </DashboardLayout>
  )
}
