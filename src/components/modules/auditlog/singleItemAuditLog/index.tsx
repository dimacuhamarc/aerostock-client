'use client'

import { isItemExisting } from '@/utils/api/retriever'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  AuditLogType,
  ItemType,
  ItemWithAuditType,
} from '@/utils/helpers/inventory-types';
import { getItemAuditLog } from '@/utils/api/retriever';
import {SingleItemAuditCard, SimpleItemCard} from '@/components/modules/auditlog';

export default function SingleItemAuditLog({params} : {params: {id: string}}) {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<ItemWithAuditType>();
  const [itemDetail, setItemDetail] = useState<ItemType>();
  const [auditDetails, setAuditDetails] = useState<AuditLogType[]>();

  const router = useRouter();

  useEffect(() => {
    const checkItemExists = async () => {
      const exists = await isItemExisting({ item_id: params.id });
      if (!exists) {
        router.push('/audit-log');
      }
    };
    checkItemExists();  // Call the async function inside useEffect
  },[params.id, router]);

  useEffect(() => {
    const getItemsWithAudit = async () => {
      const ItemWithAuditLog = await getItemAuditLog({item_id: params.id});
      ItemWithAuditLog || ItemWithAuditLog == null ? setLoading(false) : setLoading(true);
      setItem(ItemWithAuditLog);
      setAuditDetails(ItemWithAuditLog?.audit_log);
      setItemDetail(ItemWithAuditLog?.item);
    };
    getItemsWithAudit();
  }, [params.id]);

  return (
    <>
      <h3 className="text-xl font-medium mt-8">Item Summary</h3>
      {itemDetail && <SimpleItemCard ItemDetail={itemDetail} />}
      <h3 className="text-xl font-medium mt-8">Audit Logs</h3>
        {
          loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            auditDetails?.map((auditDetail, index) => (
              <SingleItemAuditCard key={index} AuditDetail={auditDetail} />
            ))
          )
        }
    </>
  )
}
