'use client';

import Loader from '@/components/common/loader';
import { getUserData } from '@/utils/api/retriever';
import React, { useState, useEffect } from 'react';

type UserData = {
  first_name: string;
  last_name: string;
  employee_id: string;
};

export default function UserCard() {
  const [user, setUser] = useState(null as UserData | null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user: UserData = getUserData() as UserData;
    user ? setLoading(false) : setLoading(true);
    setUser(user);
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
          <>
            <div className="text-2xl font-bold">
              Hello, {user?.first_name} {user?.last_name}!
            </div>
            <p className="text-muted-foreground">
              Welcome to your Aerostock Dashboard.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
