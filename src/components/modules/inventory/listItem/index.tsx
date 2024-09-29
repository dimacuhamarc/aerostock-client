'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LuCircleEllipsis } from 'react-icons/lu';
import { ItemType } from '@/utils/helpers/inventory-types';
import { deleteItem } from '@/utils/api/request';
import { useRouter } from 'next/navigation';

interface ListItemProps {
  item: ItemType;
  index: number;
}

export default function ListItem({ item: itemData, index }: ListItemProps) {
  const [showActions, setShowActions] = useState(false);

  const router = useRouter();

  function handleShowActions() {
    setShowActions(!showActions);
  }

  function handleDeleteItem() {
    deleteItem(itemData.id);
    window.location.reload();
  }

  function handleEditItem() {
    router.push(`/inventory/edit-item/${itemData.id}`);
  }


  return (
    <tr>
      <td>{index}</td>
      <td>{itemData.quantity}</td>
      <td>
        <Link href={`/inventory/${itemData.id}`} className="text-primary hover:underline">
          {itemData.name}{' '}
        </Link>
      </td>
      <td>
        {itemData.description.length > 15
          ? `${itemData.description.slice(0, 15)}...`
          : itemData.description}
      </td>
      <td>{itemData.product_number}</td>
      <td>
        {itemData.location.length > 15
          ? `${itemData.location.slice(0, 15)}...`
          : itemData.location}
      </td>
      <td>{itemData.authorized_inspection_personnel}</td>
      <td className="w-[320px] flex flex-row gap-4 items-center">
        {showActions && (
          <div className="flex flex-row gap-4 items-center">
            <button
              className="btn btn-link font-normal no-underline"
              onClick={handleShowActions}
            >
              <LuCircleEllipsis className="text-xl" />
            </button>

            <button className="btn btn-error" onClick={handleDeleteItem}>Delete Item</button>
            <button className="btn btn-primary" onClick={handleEditItem}>Edit Item</button>
          </div>
        )}
        {!showActions && (
          <button
            className="btn btn-link font-normal no-underline"
            onClick={handleShowActions}
          >
            <LuCircleEllipsis className="text-xl" />
          </button>
        )}
      </td>
    </tr>
  );
}
