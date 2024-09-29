'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isItemExisting, getSingleItem } from '@/utils/api/retriever';
import { ItemType } from '@/utils/helpers/inventory-types';
import { LuArrowRight, LuArrowLeft } from 'react-icons/lu';
import { deleteItem } from '@/utils/api/request';
import Link from 'next/link';
import { formatTimestamp } from '@/utils/helpers/app-helpers';

export default function SingleItem({ params }: { params: { id: string } }) {
  const router = useRouter();

  const [ItemDetail, setItemDetail] = useState<ItemType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkItemExists = async () => {
      const exists = await isItemExisting({ item_id: params.id });
      if (!exists) {
        router.push('/inventory');
      }
    };
    checkItemExists(); // Call the async function inside useEffect
  }, [params.id, router]);

  useEffect(() => {
    const getItem = async () => {
      const item = await getSingleItem({ item_id: params.id });
      item || item == null ? setLoading(false) : setLoading(true);
      console.log(item);
      setItemDetail(item);
    };
    getItem();
  }, [params.id]);

  function handleDeleteItem() {
    deleteItem(params.id);
    router.push('/inventory');
  }

  function handleEditItem() {
    router.push(`/inventory/edit-item/${params.id}`);
  }

  return (
    <>
      <Link
        href={`/inventory`}
        className="text-primary hover:underline flex flex-row gap-2 items-center"
      >
        <LuArrowLeft /> Go Back
      </Link>
      <div className="card bg-white shadow-md p-4 sm:col-span-2 lg:col-span-2 lg:row-span-1">
        <div className="card-body">
          <h3 className="font-medium">{ItemDetail?.name}</h3>
          <table className="table w-full">
            <tbody>
              <tr>
                <td className="font-medium">Description</td>
                <td>{ItemDetail?.description}</td>
              </tr>
              <tr>
                <td className="font-medium">Product Number</td>
                <td>{ItemDetail?.product_number}</td>
              </tr>
              <tr>
                <td className="font-medium">Quantity</td>
                <td>{ItemDetail?.quantity}</td>
              </tr>
              <tr>
                <td className="font-medium">UOM</td>
                <td>{ItemDetail?.uom}</td>
              </tr>
              <tr>
                <td className="font-medium">Date Manufactured</td>
                <td>
                  {ItemDetail?.date_manufactured
                    ? formatTimestamp(ItemDetail?.date_manufactured)
                    : 'N/A'}
                </td>
              </tr>
              <tr>
                <td className="font-medium">Date Expired</td>
                <td>
                  {ItemDetail?.date_expired
                    ? formatTimestamp(ItemDetail?.date_expired)
                    : 'N/A'}
                </td>
              </tr>
              <tr>
                <td className="font-medium">Location</td>
                <td>{ItemDetail?.location}</td>
              </tr>
              <tr>
                <td className="font-medium">Remarks</td>
                <td>{ItemDetail?.remarks}</td>
              </tr>
              <tr>
                <td className="font-medium">Date Arrival to Warehouse</td>
                <td>
                  {ItemDetail?.date_arrival_to_warehouse
                    ? formatTimestamp(ItemDetail?.date_arrival_to_warehouse)
                    : 'N/A'}
                </td>
              </tr>
              <tr>
                <td className="font-medium">Authorized Inspection Personnel</td>
                <td>{ItemDetail?.authorized_inspection_personnel}</td>
              </tr>
              <tr>
                <td className="font-medium">Created At</td>
                <td>
                  {ItemDetail?.created_at
                    ? formatTimestamp(ItemDetail?.created_at)
                    : 'N/A'}
                </td>
              </tr>
              <tr>
                <td className="font-medium">Updated At</td>
                <td>
                  {ItemDetail?.updated_at
                    ? formatTimestamp(ItemDetail?.updated_at)
                    : 'N/A'}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="card-actions flex flex-row justify-between items-center">
            <Link
              href={`/audit-log/${ItemDetail?.id}`}
              className="text-primary hover:underline flex flex-row gap-2 items-center"
            >
              View Audit Log <LuArrowRight />
            </Link>
            <div className="flex flex-row gap-4">
              <button className="btn btn-error" onClick={handleDeleteItem}>
                Delete Item
              </button>
              <button className="btn btn-primary" onClick={handleEditItem}>
                Edit Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
