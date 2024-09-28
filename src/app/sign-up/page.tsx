import OnboardingLayout from '@/components/layout/onboarding';
import { Metadata } from 'next';
import { ONBOARDING } from '@/utils/constants/page_constants';
import Link from 'next/link';
import { LuAtSign, LuSquareAsterisk } from 'react-icons/lu';
import Input from '@/components/common/input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { authSignIn } from '@/utils/api/auth';

export const metadata: Metadata = {
  title: ONBOARDING.SIGN_UP.title,
  description: ONBOARDING.SIGN_UP.description,
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SIGN_IN_INPUT>({ criteriaMode: 'all' });

  const onSubmit: SubmitHandler<SIGN_IN_INPUT> = (data) => {
    authSignIn(data);
  }

  return (
    <OnboardingLayout>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500">
          Please sign up to create an account.
        </p>
      </div>

      <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2 flex flex-col">
          <Input
            Icon={<LuAtSign className="text-gray-500" />}
            placeholder="your@mail.com"
            type="email"
            isRequired
            
          />
        </div>

        <div className="space-y-2">
          <Input
            Icon={<LuSquareAsterisk className="text-gray-500" />}
            placeholder="Enter your password"
            type="password"
            isRequired
          />
        </div>

        <div className="space-y-2">
          <Input
            Icon={<LuSquareAsterisk className="text-gray-500" />}
            placeholder="Confirm your password"
            type="password"
            isRequired
          />
        </div>

        <button type="submit" className="w-full btn btn-primary">
          Sign In
        </button>
      </form>

      <div className="text-center space-y-2">
        <div className="text-sm">
          Already have an account?{' '}
          <Link
            href={ONBOARDING.SIGN_IN.href}
            className="text-primary hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </OnboardingLayout>
  );
}
