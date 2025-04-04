import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./month-revenue-card";
import { MonthSalesAmountCard } from "./month-sales-amount-card";
import { DaySalesAmountCard } from "./day-sales-amount-card";
import { RevenueChart } from "./revenue-chart";

export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          <MonthRevenueCard />
          <MonthSalesAmountCard />
          <DaySalesAmountCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
        </div>
        <div className="grid grid-cols-4 gap-4"></div>
      </div>
    </div>
  );
}
