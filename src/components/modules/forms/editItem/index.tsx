'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ItemTypeInput, ItemType } from '@/utils/helpers/inventory-types';
import { isItemExisting, getSingleItem } from '@/utils/api/retriever';
import { updateItem } from '@/utils/api/request';

export default function EditItemForm({params}: {params: {id: string}}) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState<ItemType>();

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
      const itemData = await getSingleItem({ item_id: params.id });
      itemData || itemData == null ? setLoading(false) : setLoading(true);
      setItem(itemData);
      console.log(itemData);
    };
    getItem();
  }, [params.id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ItemTypeInput>({ criteriaMode: 'all' });

  const onSubmit: SubmitHandler<ItemTypeInput> = async (data) => {
    // Initialize an object to store only modified fields
    const updatedData: Partial<ItemTypeInput> = {};
  
    Object.keys(data).forEach((key) => {
      const typedKey = key as keyof ItemTypeInput;
  
      // Compare each field with the initial item state
      if (data[typedKey] !== item?.[typedKey]) {
        // If the field has changed and is not empty, add it to updatedData
        if (
          data[typedKey] !== '' && // Check for empty fields
          typedKey !== 'date_manufactured' && // Exclude date fields
          typedKey !== 'date_expired' &&
          typedKey !== 'date_arrival_to_warehouse'
        ) {
          // Only update the modified fields
          updatedData[typedKey] = data[typedKey] as any;
        }
      }
    });
  
    console.log("Modified fields to update:", updatedData);
  
    setLoading(true);
    // Proceed to update only the modified fields
    const response = await updateItem(updatedData, params.id);
    
    if (response) {
      setLoading(false);
      router.push('/inventory');
    } else {
      alert('Failed to update item');
      setLoading(false);
    }
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <h1 className="text-2xl font-bold">Edit Item : {}</h1>
      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row items-center gap-4 mb-2">
          <label className="text-sm">Name</label>
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            required
            defaultValue={item?.name}
            {...register('name')}
          />
          <label className="text-sm">Product Number</label>
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            required
            defaultValue={item?.product_number}
            {...register('product_number')}
          />
          <label className="text-sm">Serial Number</label>
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            required
            defaultValue={item?.serial_number}
            {...register('serial_number')}
          />
          <label className="text-sm">Quantity</label>
          <input
            type="number"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            min={1}
            required
            defaultValue={item?.quantity}
            {...register('quantity')}
          />
        </div>

        <label className="text-sm">Description</label>
        <textarea
          className="textarea textarea-info border border-gray-300 rounded-md p-2 mb-2"
          rows={6}
          defaultValue={item?.description}
          {...register('description')}
        />

        <div className="flex flex-row items-center gap-4 mt-2">
          <label className="text-sm">UOM</label>
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            defaultValue={item?.uom}
            {...register('uom')}
          />
          <label className="text-sm">Location</label>
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            required
            defaultValue={item?.location}
            {...register('location')}
          />
        </div>

        <div className="flex flex-row items-center gap-4">
          <label className="text-sm">Date Manufactured</label>
          <input
            type="date"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            defaultValue={item?.date_manufactured}
            {...register('date_manufactured')}
          />
          <label className="text-sm">Date Expired</label>
          <input
            type="date"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            defaultValue={item?.date_expired}
            {...register('date_expired')}
          />
          <label className="text-sm">Date Arrival to Warehouse</label>
          <input
            type="date"
            className="flex-1 border border-gray-300 rounded-md p-2 mb-2"
            defaultValue={item?.date_arrival_to_warehouse}
            {...register('date_arrival_to_warehouse')}
          />
        </div>

        <label className="text-sm">Remarks</label>
        <textarea
          className="textarea textarea-info border border-gray-300 rounded-md p-2 mb-2"
          defaultValue={item?.remarks}
          {...register('remarks')}
        />

        <label className="text-sm">Authorized Inspection Personnel</label>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 mb-2"
          defaultValue={item?.authorized_inspection_personnel}
          {...register('authorized_inspection_personnel')}
        />

        <button type="submit" className={`w-full btn btn-primary ${loading ? 'cursor-not-allowed bg-blue-300' : ''}`}>
          {loading ? <span className="loading loading-spinner"></span> : 'Submit'}
        </button>
      </form>
    </div>
  )
}
