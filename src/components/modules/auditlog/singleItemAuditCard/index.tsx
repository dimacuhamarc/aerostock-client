import { formatTimestamp } from '@/utils/helpers/app-helpers';
import { AuditLogType } from '@/utils/helpers/inventory-types';
import React from 'react';

export default function SingleItemAuditCard({ AuditDetail } : {AuditDetail: AuditLogType}) {
  const getEventBadgeClass = (event: string) => {
    switch (event) {
      case 'create':
        return 'badge-success'
      case 'update':
        return 'badge-info'
      case 'delete':
        return 'badge-error'
      default:
        return 'badge-ghost'
    }
  }
  return (
    <div className="card bg-white shadow-md p-4 sm:col-span-2 lg:col-span-2 lg:row-span-1">
      <div className="card-body">
        <h3 className="font-medium">{formatTimestamp(AuditDetail.modified_at)}</h3>
        <table className="table w-full">
          <tbody>
            <tr>
              <td className="font-medium">Event</td>
              <td>
                <span
                  className={`badge ${getEventBadgeClass(AuditDetail.event)}`}
                >
                  {AuditDetail.event}
                </span>
              </td>
            </tr>
            <tr>
              <td className="font-medium">Modified At</td>
              <td>{formatTimestamp(AuditDetail.modified_at)}</td>
            </tr>
            <tr>
              <td className="font-medium">Modified By</td>
              <td>{AuditDetail.modified_by}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
