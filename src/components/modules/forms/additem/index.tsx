'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ItemTypeInput } from '@/utils/helpers/inventory-types';
import { createItem } from '@/utils/api/request';

export default function AddItemForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ItemTypeInput>({ criteriaMode: 'all' });

  const onSubmit: SubmitHandler<ItemTypeInput> = async (data) => {
    // set "" to n/a if empty except for date fields, use map
    Object.keys(data).forEach((key) => {
      if (
        data[key as keyof ItemTypeInput] === '' && // Check for empty fields
        key !== 'date_manufactured' &&             // Exclude date fields
        key !== 'date_expired' && 
        key !== 'date_arrival_to_warehouse'
      ) {
        (data as any)[key] = 'N/A';  // Assign 'N/A' to non-date fields
      }
    });
    
    console.log(data);

    const response = await createItem(data);
    if (response) {
      setLoading(false);
      router.push('/inventory');
    } else {
      alert('Failed to add item');
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <h1 className="text-2xl font-bold">Add an Item</h1>
      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row items-center gap-4 mb-2">
          <label className="text-sm">Name</label>
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            required
            {...register('name')}
          />
          <label className="text-sm">Product Number</label>
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            required
            {...register('product_number')}
          />
          <label className="text-sm">Serial Number</label>
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            required
            {...register('serial_number')}
          />
          <label className="text-sm">Quantity</label>
          <input
            type="number"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            min={1}
            required
            {...register('quantity')}
          />
        </div>

        <label className="text-sm">Description</label>
        <textarea
          className="textarea textarea-info border border-gray-300 rounded-md p-2 mb-2"
          rows={6}
          {...register('description')}
        />

        <div className="flex flex-row items-center gap-4 mt-2">
          <label className="text-sm">UOM</label>
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            {...register('uom')}
          />
          <label className="text-sm">Location</label>
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            required
            {...register('location')}
          />
        </div>

        <div className="flex flex-row items-center gap-4">
          <label className="text-sm">Date Manufactured</label>
          <input
            type="date"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            {...register('date_manufactured')}
          />
          <label className="text-sm">Date Expired</label>
          <input
            type="date"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            {...register('date_expired')}
          />
          <label className="text-sm">Date Arrival to Warehouse</label>
          <input
            type="date"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            {...register('date_arrival_to_warehouse')}
          />
        </div>

        <label className="text-sm">Remarks</label>
        <textarea
          className="textarea textarea-info border border-gray-300 rounded-md p-2 mb-2"
          {...register('remarks')}
        />

        <label className="text-sm">Authorized Inspection Personnel</label>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 mb-2"
          {...register('authorized_inspection_personnel')}
        />

        <button type="submit" className={`w-full btn btn-primary ${loading ? 'cursor-not-allowed bg-blue-300' : ''}`}>
          {loading ? <span className="loading loading-spinner"></span> : 'Submit'}
        </button>
      </form>
    </div>
  );
}
