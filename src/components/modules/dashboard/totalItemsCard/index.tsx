'use client'

import React, { useState, useEffect } from 'react';
import { getTotalItemCount } from '@/utils/api/retriever';


export default function TotalItemsCard() {
  const [total, setTotal] = useState(null)

  useEffect(() => {
    async function getTotal() {
      const totalCount = await getTotalItemCount()
      setTotal(totalCount)
    }
    getTotal()
  }, [])

  return (
    <div className="card bg-white shadow-md p-4 sm:col-span-2 lg:col-span-2 lg:row-span-1">
      <div className="card-body">
        <div className="text-2xl font-bold">{total} Total Items</div>
      </div>
    </div>
  );
}
