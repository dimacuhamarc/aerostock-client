import { Metadata } from 'next';
import OnboardingLayout from '@/components/layout/onboarding';
import { ONBOARDING } from '@/utils/constants/page_constants';
import SignInForm from '@/components/modules/forms/signin';

export const metadata: Metadata = {
  title: ONBOARDING.SIGN_IN.title,
  description: ONBOARDING.SIGN_IN.description,
};

export default function SignIn() {
  
  return (
    <OnboardingLayout>
      <SignInForm />
    </OnboardingLayout>
  );
}
