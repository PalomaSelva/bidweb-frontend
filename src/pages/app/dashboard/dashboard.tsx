import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./month-revenue-card";
import { MonthSalesAmountCard } from "./month-sales-amount-card";
import { RevenueChart } from "./revenue-chart";
import { BestSellingProductCard } from "./best-selling-product-card";
import { PopularProductsChart } from "./popular-products-chart";

export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-3">
          <MonthRevenueCard />
          <MonthSalesAmountCard />
          <BestSellingProductCard />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <RevenueChart />
          </div>
          <div className="col-span-12 md:col-span-6">
            <PopularProductsChart />
          </div>
        </div>
      </div>
    </div>
  );
}
