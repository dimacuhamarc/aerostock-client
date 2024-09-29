/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useState, useEffect, useRef, use } from 'react';
import { useRouter } from 'next/navigation';
import { LuAtSign } from 'react-icons/lu';
import Link from 'next/link';
import { ONBOARDING } from '@/utils/constants/page_constants';
import { authOtpSignIn, restrictOnboarding, secureOtpPage } from '@/utils/api/auth';

export default function OtpForm() {
  const router = useRouter();

  useEffect(() => {
    secureOtpPage() ? null : restrictOnboarding() ? router.push('/sign-in') : router.push('/dashboard');
  }, []);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (element: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (isNaN(Number(element.target.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.target.value : d))]);

    if (element.target.value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const otpString = otp.join('');
    console.log('Submitted OTP:', otpString);
    const user_id = sessionStorage.getItem('user_id');
    const response = await authOtpSignIn({ otp: otpString });

    if (response) {
      setLoading(false);
      router.push('/dashboard');
    } else {
      alert('Invalid OTP');
      setLoading(false);
    }
    // Here you would typically send the OTP to your server for verification
    
  };

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Please Verify</h1>
        <p className="text-gray-500">
          We&apos;ve sent you a 6-digit code to your email. Please enter the code to verify your account.
        </p>
      </div>

      <form className="space-y-4 w-full" onSubmit={handleSubmit}>
        <div className="space-y-2 flex flex-col">
          <div className="flex justify-center space-x-2 mb-6">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                ref={(el) => { inputRefs.current[index] = el; }} // Use a void return
                value={data}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="input input-bordered w-12 h-12 text-center text-xl font-bold"
                aria-label={`Digit ${index + 1} of OTP`}
                required
              />
            ))}
          </div>
        </div>

        <button type="submit" className={`w-full btn btn-primary ${loading ? 'cursor-not-allowed bg-blue-300' : ''}`}>
          {loading ? <span className="loading loading-spinner"></span> : 'Submit'}
        </button>
      </form>

      <div className="text-center space-y-2">
        <Link
          href="/forgot-password"
          className="text-sm text-primary hover:underline"
        >
          Forgot your password?
        </Link>
        <div className="text-sm">
          Dont have an account?{' '}
          <Link
            href={ONBOARDING.SIGN_UP.href}
            className="text-primary hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
}
