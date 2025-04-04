import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function DaySalesAmountCard() {
  return (
    <Card className="gap-0.5">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base">Vendas (dia)</CardTitle>
        <DollarSign size={16} className="text-muted-foreground" />
      </CardHeader>
      <CardContent className="">
        <span className="text-2xl font-bold tracking-tight">12</span>
        <p className="text-muted-foreground mt-1 text-sm">
          <span className="mr-0.5 text-rose-600 dark:text-rose-400">-4%</span>{" "}
          em relação a ontem
        </p>
      </CardContent>
    </Card>
  );
}
