import { getTopProducts } from "@/api/get-top.products";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function BestSellingProductCard() {
  const { data: topProducts = [] } = useQuery({
    queryKey: ['sales', 'popular-products'],
    queryFn: getTopProducts,
    retry: 1,
  });
  return (
    <Card className="gap-0.5">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base">Produto mais vendido (mês)</CardTitle>
        <DollarSign size={16} className="text-muted-foreground" />
      </CardHeader>
      <CardContent className="">
        {topProducts[0] ? (
          <span className="text-2xl font-bold tracking-tight">
            {topProducts[0].product}
          </span>

        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
