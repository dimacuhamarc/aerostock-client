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

const user = {
  first_name: 'John',
  last_name: 'Doe',
};
const totalItems = 1234;
const topItems = [
  { name: 'Item A', value: 532 },
  { name: 'Item B', value: 423 },
  { name: 'Item C', value: 387 },
  { name: 'Item D', value: 320 },
  { name: 'Item E', value: 289 },
];
const newItems = [
  { name: 'New Item 1', value: 20230928 },
  { name: 'New Item 2', value: 20230927 },
  { name: 'New Item 3', value: 20230926 },
  { name: 'New Item 4', value: 20230925 },
  { name: 'New Item 5', value: 20230924 },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 h-full overflow-scroll">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="h-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
          <UserCard />

          <ListCard
            title="Top 3 Items"
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
