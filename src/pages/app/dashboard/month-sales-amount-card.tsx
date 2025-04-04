import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthSalesAmountCard() {
  return (
    <Card className="gap-0.5">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base">Total de vendas (mês)</CardTitle>
        <DollarSign size={16} className="text-muted-foreground" />
      </CardHeader>
      <CardContent className="">
        <span className="text-2xl font-bold tracking-tight">246</span>
        <p className="text-muted-foreground mt-1 text-sm">
          <span className="mr-0.5 text-emerald-600 dark:text-emerald-400">
            +6%
          </span>{" "}
          em relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  );
}
