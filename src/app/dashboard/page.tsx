import { Metadata } from 'next';
import { APPLICATION } from '@/utils/constants/page_constants';
import NavBar from '@/components/common/navbar';
import DashboardLayout from '@/components/layout/dashboard';

export const metadata: Metadata = {
  title: APPLICATION.DASHBOARD.title,
  description: APPLICATION.DASHBOARD.description,
};

const user = { name: 'John Doe' };
const totalItems = 1234;
const topItems = [
  { name: 'Item A', value: 532 },
  { name: 'Item B', value: 423 },
  { name: 'Item C', value: 387 },
  { name: 'Item D', value: 320 },
  { name: 'Item E', value: 289 },
];
const newItems = [
  { name: 'New Item 1', date: '2023-09-28' },
  { name: 'New Item 2', date: '2023-09-27' },
  { name: 'New Item 3', date: '2023-09-26' },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 h-full overflow-scroll">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="h-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
          <div className="card bg-white shadow-md p-4 sm:col-span-2 lg:col-span-2 lg:row-span-1">
            <div className="card-body">
              <div className="text-2xl font-bold">Hello, {user.name}!</div>
              <p className="text-muted-foreground">
                Welcome to your Aerostock Dashboard.
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-md p-4 sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <div>
              <h1 className="card-body text-lg font-bold">Top 5 Items</h1>
            </div>
            <div>
              <div className="card-body space-y-4">
                {topItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {/* <BarChart3 className="h-4 w-4 mr-2 text-muted-foreground" /> */}
                    <div className="flex-1 text-sm">{item.name}</div>
                    <div className="text-sm font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="card bg-white shadow-md p-4 sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <div>
              <h1 className="card-body text-lg font-bold">New Items</h1>
            </div>
            <div>
              <div className="card-body space-y-4">
                {newItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {/* <PackagePlus className="h-4 w-4 mr-2 text-muted-foreground" /> */}
                    <div className="flex-1 text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="card bg-white shadow-md p-4 sm:col-span-2 lg:col-span-2 lg:row-span-1">
            <div className="card-body">
              <div className="text-2xl font-bold">{totalItems} Total Items</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
