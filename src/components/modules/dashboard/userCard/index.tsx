'use client'

import { getUserData } from '@/utils/api/retriever';
import React, { useState, useEffect } from 'react';

type UserData = {
  first_name: string;
  last_name: string;
  employee_id: string;
}

export default function UserCard() {
  const [user, setUser] = useState(null as UserData | null);

  useEffect(() => {
    const user: UserData = getUserData() as UserData;
    setUser(user);
  }, []);

  return (
    <div className="card bg-white shadow-md p-4 sm:col-span-2 lg:col-span-2 lg:row-span-1">
      <div className="card-body">
        <div className="text-2xl font-bold">
          Hello, {user?.first_name} {user?.last_name}!
        </div>
        <p className="text-muted-foreground">
          Welcome to your Aerostock Dashboard.
        </p>
      </div>
    </div>
  );
}
