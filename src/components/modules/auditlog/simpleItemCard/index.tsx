import React from 'react'
import { ItemType } from '@/utils/helpers/inventory-types'
import Link from 'next/link'
import { LuArrowRight } from 'react-icons/lu'

export default function SimpleItemCard({ ItemDetail }:{ItemDetail: ItemType}) {
  return (
    <div className="card bg-white shadow-md p-4 sm:col-span-2 lg:col-span-2 lg:row-span-1">
      <div className="card-body">
        <h3 className="font-medium">{ItemDetail.name}</h3>
        <table className="table w-full">
          <tbody>
            <tr>
              <td className="font-medium">Description</td>
              <td>{ItemDetail.description}</td>
            </tr>
            <tr>
              <td className="font-medium">Product Number</td>
              <td>{ItemDetail.product_number}</td>
            </tr>
            <tr>
              <td className="font-medium">Quantity</td>
              <td>{ItemDetail.quantity}</td>
            </tr>
          </tbody>
        </table>
        <div className='card-actions'>
          <Link href={`/inventory/${ItemDetail.id}`} className="text-primary hover:underline flex flex-row gap-2 items-center">
            View More Details <LuArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}
