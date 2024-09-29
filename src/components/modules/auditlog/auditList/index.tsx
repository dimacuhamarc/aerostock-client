'use client';

import React, { useState, useEffect } from 'react';
import { getItemAuditLogs } from '@/utils/api/retriever';
import {
  AuditLogType,
  ItemWithAuditType,
} from '@/utils/helpers/inventory-types';
import { formatTimestamp } from '@/utils/helpers/app-helpers';
import Link from 'next/link';
import Image from 'next/image';
import AuditListItem from '../auditListItem';

const items = [
  {
    id: 1,
    action: 'Create',
    entity: 'Item',
    user: '4',
  },
  {
    id: 2,
    action: 'Update',
    entity: 'Item',
    user: '4',
  },
];

export default function AuditList() {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItemsWithAudit = async () => {
      const topItems = await getItemAuditLogs();
      topItems || topItems == null ? setLoading(false) : setLoading(true);
      setItems(topItems);
    };
    getItemsWithAudit();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Quantity</th>
          <th>Product</th>
          <th>Product Number</th>
          <th>Last Updated</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="animate-pulse">
                <td>
                  <div className="w-10 h-4 bg-gray-300 rounded"></div>
                </td>
                <td>
                  <div className="w-10 h-4 bg-gray-300 rounded"></div>
                </td>
                <td>
                  <div className="w-10 h-4 bg-gray-300 rounded"></div>
                </td>
                <td>
                  <div className="w-10 h-4 bg-gray-300 rounded"></div>
                </td>
                <td>
                  <div className="w-10 h-4 bg-gray-300 rounded"></div>
                </td>
                <td>
                  <div className="w-10 h-4 bg-gray-300 rounded"></div>
                </td>
              </tr>
            ))
          ) : items ? (
            items.map((item: ItemWithAuditType, index) => (
              <AuditListItem key={index} index={index} item={item} />
            ))
          ) : (
            <div className="flex items-center">
              <div className="flex-1 text-md font-medium">No items found</div>
            </div>
          )
        }
      </tbody>
    </table>
  );
}
