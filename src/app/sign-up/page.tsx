import OnboardingLayout from '@/components/layout/onboarding';
import { Metadata } from 'next';
import { ONBOARDING } from '@/utils/constants/page_constants';
import Link from 'next/link';
import { LuAtSign, LuSquareAsterisk } from 'react-icons/lu';
import Input from '@/components/common/input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { authSignIn } from '@/utils/api/auth';
import SignUpForm from '@/components/modules/forms/signup';

export const metadata: Metadata = {
  title: ONBOARDING.SIGN_UP.title,
  description: ONBOARDING.SIGN_UP.description,
};

export default function SignUp() {
  return (
    <OnboardingLayout>
      <SignUpForm />
    </OnboardingLayout>
  );
}
