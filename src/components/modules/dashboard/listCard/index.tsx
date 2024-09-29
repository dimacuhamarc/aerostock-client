'use client';

import React, { useState, useEffect } from 'react';
import { getItems } from '@/utils/api/retriever';
import { ItemType } from '@/utils/helpers/inventory-types';
import { formatTimestamp } from '@/utils/helpers/app-helpers';

type ListCardProps = {
  title: string;
  type: string;
  icon: React.ReactNode;
};

export default function ListCard({ title, type, icon }: ListCardProps) {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (type === 'top_items') {
      const getTopItems = async () => {
        const topItems = await getItems({ page: 1, items: 3, top: true });
        topItems || topItems == null ? setLoading(false) : setLoading(true);
        setItems(topItems?.items);
      };
      getTopItems();
    } else if (type === 'latest_items') {
      const getLatestItems = async () => {
        const latestItems = await getItems({
          page: 1,
          items: 8,
          new_items: false,
        });
        latestItems || latestItems == null
          ? setLoading(false)
          : setLoading(true);
        setItems(latestItems?.items);
      };
      getLatestItems();
    }
  }, [type]);

  return (
    <div
      className={`card bg-white shadow-md p-4 sm:col-span-2 lg:col-span-2 animate-card ${
        type == 'latest_items' ? 'lg:row-span-2' : 'lg:row-span-2'
      }`}
    >
      <div>
        <h1 className="card-body text-lg font-bold flex flex-row gap-3 items-center ">
          {icon}
          {title}
        </h1>
      </div>
      <div className="card-body">
        <div className="space-y-4">
          {loading ? (
            // map 5 items loading
            Array.from({ length: type === 'latest_items' ? 8 : 3 }).map(
              (_, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <div className="flex-1 skeleton w-4 h-8 rounded-full" />
                  <div className="text-sm font-normal skeleton w-8 h-8 rounded-full" />
                </div>
              )
            )
          ) : items ? (
            items.map((item: ItemType, index: number) => (
              <div key={index} className="flex items-center">
                <div className="flex-1 text-md font-medium">{item.name}</div>
                <div className="text-sm font-normal">
                  {type == 'latest_items'
                    ? formatTimestamp(item.date_arrival_to_warehouse)
                    : item.quantity}
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center">
              <div className="flex-1 text-md font-medium">No items found</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
