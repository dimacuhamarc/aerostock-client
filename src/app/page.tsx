'use client'

import React, { useEffect } from "react"
import Image from "next/image"
import { restrictOnboarding, secureOtpPage } from "@/utils/api/auth";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()

  useEffect(() => {
    restrictOnboarding() ? router.push('/onboarding') : router.push('/dashboard')
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-pattern-1">
    </main>
  );
}
