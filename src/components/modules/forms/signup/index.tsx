'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import { LuAtSign, LuSquareAsterisk, LuUser2 } from 'react-icons/lu';
import { useForm, SubmitHandler } from 'react-hook-form';
import { authSignUp } from '@/utils/api/auth';
import { SIGN_UP_INPUT } from '@/utils/helpers/onboarding-types';
import Link from 'next/link';
import { ONBOARDING } from '@/utils/constants/page_constants';
import { restrictOnboarding } from '@/utils/api/auth';


export default function SignUpForm() {
  const router = useRouter();

  useEffect(() => {
    restrictOnboarding() ? null : router.push('/dashboard');
  }, []);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SIGN_UP_INPUT>({ criteriaMode: 'all' });

  const onSubmit: SubmitHandler<SIGN_UP_INPUT> = async (data) => {
    setLoading(true)
    const response = authSignUp(data)
    if (await response) {
      setLoading(false)
      router.push('/sign-in')
    } else {
      alert('Invalid credentials')
      setLoading(false)
    }
  }

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500">
          Welcome To Aerostock! Please sign up to create an account.
        </p>
      </div>

      <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2 flex flex-col">
          <label className="input input-bordered flex items-center gap-3">
            <LuUser2 className="text-gray-500" />
            <input
              type='text'
              className="grow"
              placeholder='First Name'
              required
              {...register('first_name')}
            />
          </label>
        </div>
        
        <div className="space-y-2 flex flex-col">
          <label className="input input-bordered flex items-center gap-3">
            <LuUser2 className="text-gray-500" />
            <input
              type='text'
              className="grow"
              placeholder='Last Name'
              required
              {...register('last_name')}
            />
          </label>
        </div>
        
        <div className="space-y-2 flex flex-col">
          <label className="input input-bordered flex items-center gap-3">
            <LuAtSign className="text-gray-500" />
            <input
              type='email'
              className="grow"
              placeholder='your@mail.com'
              required
              {...register('email')}
            />
          </label>
        </div>

        <div className="space-y-2">
          <label className="input input-bordered flex items-center gap-3">
            <LuSquareAsterisk className="text-gray-500" />
            <input
              type='password'
              className="grow"
              placeholder='Enter your password'
              required
              {...register('password')}
            />
          </label>
        </div>

        <div className="space-y-2">
          <label className="input input-bordered flex items-center gap-3">
            <LuSquareAsterisk className="text-gray-500" />
            <input
              type='password'
              className="grow"
              placeholder='Confirm your password'
              required
              {...register('confirmPassword', {
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return 'Passwords do not match'
                  }
                }
              })}
            />
          </label>
        </div>

        <button type="submit" className={`w-full btn btn-primary ${loading ? 'cursor-not-allowed bg-blue-300' : ''}`}>
          {loading ? <span className="loading loading-spinner"></span> : 'Sign In'}
        </button>
      </form>

      <div className="text-center space-y-2">
        <div className="text-sm">
          Already have an account?{' '}
          <Link
            href={ONBOARDING.SIGN_IN.href}
            className="text-primary hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  )
}
