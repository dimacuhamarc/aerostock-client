'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { isItemExisting, getSingleItem } from '@/utils/api/retriever'
import { ItemType } from '@/utils/helpers/inventory-types'
import { LuArrowRight } from 'react-icons/lu'
import Link from 'next/link'


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
    checkItemExists();  // Call the async function inside useEffect
  },[params.id, router]);

  useEffect(() => {
    const getItem = async () => {
      const item = await getSingleItem({ item_id: params.id });
      item || item == null ? setLoading(false) : setLoading(true);
      console.log(item)
      setItemDetail(item);
    };
    getItem();
  }, [params.id]);

  return (
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
          </tbody>
        </table>
        <div className='card-actions'>
          <Link href={`/inventory/${ItemDetail?.id}`} className="text-primary hover:underline flex flex-row gap-2 items-center">
            View More Details <LuArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}
