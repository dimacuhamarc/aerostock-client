'use client';

import React, { useEffect, useState } from 'react';
import ListItem from '@/components/modules/inventory/listItem';
import { getItems } from '@/utils/api/retriever';
import Loader from '@/components/common/loader';
import { ItemType } from '@/utils/helpers/inventory-types';

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage] = useState(10); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      const data = await getItems({ page: currentPage, items: itemsPerPage });

      if (data) {
        setItems(data.items); 
        setTotalPages(data.meta.total_pages); 
      }

      setLoading(false);
    }

    fetchItems();
  }, [currentPage, itemsPerPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      {loading ? (
        <div className="h-full flex items-center justify-center">
          {' '}
          <Loader />{' '}
        </div>
      ) : (
        <table className="table table-pin-rows">
          <thead>
            <tr>
              <th>#</th>
              <th>Quantity</th>
              <th>Product</th>
              <th>Description</th>
              <th>Product Number</th>
              <th>Location</th>
              <th>Authorized Inspection Personnel</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item: ItemType, index: number) => (
                <ListItem key={index} item={item} index={index + 1 + (currentPage - 1) * itemsPerPage} />
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center">
                  No items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      <div className="pagination-controls flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="btn btn-primary"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === totalPages ||
            totalPages === 0 ||
            loading ||
            items.length < itemsPerPage
          }
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </>
  );
}
