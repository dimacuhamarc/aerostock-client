'use client';

import React, { useState, useEffect } from 'react';
import { getTotalItemCount } from '@/utils/api/retriever';
import Loader from '@/components/common/loader';

export default function TotalItemsCard() {
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTotal() {
      const totalCount = await getTotalItemCount();
      totalCount || totalCount == 0 ? setLoading(false) : setLoading(true);
      setTotal(totalCount);
    }
    getTotal();
  }, []);

  return (
    <div className="card bg-white shadow-md p-4 sm:col-span-2 lg:col-span-2 lg:row-span-1 animate-card">
      <div className="card-body">
        {loading ? (
          <div className="h-full flex items-center justify-center">
            {' '}
            <Loader />{' '}
          </div>
        ) : (
          <div className="text-2xl font-bold h-full flex items-center justify-center">
            {total ? `${total} Item/s on Site` : 'Inventory is Empty'}
          </div>
        )}
      </div>
    </div>
  );
}
