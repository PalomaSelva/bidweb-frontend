import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LineChart, Line, YAxis, XAxis, CartesianGrid } from "recharts";
import colors from "tailwindcss/colors";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export function RevenueChart() {
  const data = [
    {
      date: "07/12",
      receita: 1900,
    },
    {
      date: "08/12",
      receita: 1500,
    },
    {
      date: "10/12",
      receita: 2600,
    },
    {
      date: "11/12",
      receita: 1900,
    },
    {
      date: "12/12",
      receita: 4500,
    },
    {
      date: "13/12",
      receita: 2500,
    },
  ];

  const chartConfig = {
    receita: {
      label: "Receita",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no peíodo
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart accessibilityLayer data={data} style={{ fontSize: 12 }}>
            <XAxis
              dataKey="date"
              stroke="#888"
              tickLine={false}
              axisLine={false}
              dy={18}
            />
            <YAxis
              stroke="#888"
              width={70}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="receita"
              stroke={colors.violet["400"]}
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
