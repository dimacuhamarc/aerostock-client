'use client'

import React from 'react';

type ListCardProps = {
  title: string;
  items: { name: string; value: number }[],
  icon: React.ReactNode
}

export default function ListCard({title, items, icon}: ListCardProps) {
  return (
    <div className="card bg-white shadow-md p-4 sm:col-span-2 lg:col-span-2 lg:row-span-2">
      <div>
        <h1 className="card-body text-lg font-bold">Top 5 Items</h1>
      </div>
      <div>
        <div className="card-body space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              {icon}
              <div className="flex-1 text-sm">{item.name}</div>
              <div className="text-sm font-medium">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
