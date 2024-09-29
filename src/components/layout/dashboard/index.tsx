'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import NavBar from '@/components/common/navbar';
import { LOADER } from '@/utils/constants/app_constants';
import Loader from '@/components/common/loader';
import { sessionValid } from '@/utils/api/auth';
import {useRouter} from 'next/navigation';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, LOADER.onboarding.timeout);
    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    sessionValid() ? null : router.push('/sign-in');
  }, []);
  return (
    <div className="flex flex-row">
      <NavBar />
      <div className="p-4 flex flex-col w-full h-screen">
        {loading ? (
          <div className="h-full flex flex-row justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="p-6 space-y-6 h-full overflow-scroll">{children}</div>
        )}
      </div>
    </div>
  );
}
