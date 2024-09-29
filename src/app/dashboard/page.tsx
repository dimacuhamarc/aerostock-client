import { Metadata } from 'next';
import { APPLICATION } from '@/utils/constants/page_constants';
import DashboardLayout from '@/components/layout/dashboard';
import {
  ListCard,
  TotalItemsCard,
  UserCard,
} from '@/components/modules/dashboard';
import { LuBarChart, LuTrophy } from 'react-icons/lu';

export const metadata: Metadata = {
  title: APPLICATION.DASHBOARD.title,
  description: APPLICATION.DASHBOARD.description,
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 h-full overflow-scroll">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="h-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
          <UserCard />

          <ListCard
            title="Top Items"
            type="top_items"
            icon={<LuTrophy className="h-8 w-8 mr-2 text-muted-foreground" />}
          />

          <ListCard
            title="New Items"
            type="latest_items"
            icon={<LuBarChart className="h-8 w-8 mr-2 text-muted-foreground" />}
          />

          <TotalItemsCard />
        </div>
      </div>
    </DashboardLayout>
  );
}
