import OnboardingLayout from '@/components/layout/onboarding';
import { Metadata } from 'next';
import { ONBOARDING } from '@/utils/constants/page_constants';
import OtpForm from '@/components/modules/forms/otp';

export const metadata: Metadata = {
  title: ONBOARDING.SIGN_UP.title,
  description: ONBOARDING.SIGN_UP.description,
};

export default function VerifyOtp() {
  return (
    <OnboardingLayout>
      <OtpForm />
    </OnboardingLayout>
  );
}
