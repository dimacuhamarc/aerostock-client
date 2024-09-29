import React from 'react';
import { ItemWithAuditType } from '@/utils/helpers/inventory-types';
import Link from 'next/link';
import { formatTimestamp } from '@/utils/helpers/app-helpers';

type AuditListItemProps = {
  item: ItemWithAuditType;
  index: number;
};

export default function AuditListItem({ item, index }: AuditListItemProps) {
  return (
    <tr key={index}>
      <td>{item.audit_log.length}</td>
      <td>{item.item.quantity}</td>
      <th>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{item.item.name}</div>
            <div className="text-sm opacity-50">{item.item.serial_number}</div>
          </div>
        </div>
      </th>
      <td>{item.item.product_number}</td>
      <td>
        {item.item.updated_at == item.item.created_at
          ? 'Unmodified'
          : formatTimestamp(item.item.updated_at)}
        <br />
        <span className="badge badge-ghost badge-sm">
          {item.item.created_at == item.item.updated_at ? 'Created' : 'Updated'}
        </span>
      </td>
      <td>
        <Link href="/" className="text-primary hover:underline">
          View History{' '}
          <span className="text-muted-foreground">
            ({item.audit_log.length})
          </span>
        </Link>
      </td>
    </tr>
  );
}
