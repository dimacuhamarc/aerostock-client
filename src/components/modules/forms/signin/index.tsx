'use client'

import React, { useRef } from 'react'
import { LuAtSign, LuSquareAsterisk } from 'react-icons/lu';
import Input from '@/components/common/input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { authSignIn } from '@/utils/api/auth';
import { SIGN_IN_INPUT } from '@/utils/helpers/onboarding-types';
import Link from 'next/link';
import { ONBOARDING } from '@/utils/constants/page_constants';

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SIGN_IN_INPUT>({ criteriaMode: 'all' });

  const onSubmit: SubmitHandler<SIGN_IN_INPUT> = (data) => {
    console.log(data)
    authSignIn(data);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-gray-500">
          Welcome back! Please sign in to your account.
        </p>
      </div>

      <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
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

        <button type="submit" className="w-full btn btn-primary">
          Sign In
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
  )
}
