import { Metadata } from 'next';
import { APPLICATION } from '@/utils/constants/page_constants';
import DashboardLayout from '@/components/layout/dashboard';
import { AuditList } from '@/components/modules/auditlog';

export const metadata: Metadata = {
  title: APPLICATION.DASHBOARD.title,
  description: APPLICATION.DASHBOARD.description,
};

export default function AuditLog() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold">Audit Logs</h1>
      <AuditList />
    </DashboardLayout>
  );
}
