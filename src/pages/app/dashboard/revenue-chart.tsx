import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LineChart, Line, YAxis, XAxis, CartesianGrid, Label } from "recharts";
import colors from "tailwindcss/colors";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useState, useMemo, useEffect } from "react";
import { DateRange } from "react-day-picker";
import { DateRangePicker } from '@/components/ui/date-range-picker'
import { toast } from "sonner";
import { isAxiosError } from "axios";
export function RevenueChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  })

 const { data: dailyRevenueInPeriod, error } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period', dateRange],
    queryFn: () => getDailyRevenueInPeriod({
      from: dateRange?.from,
      to: dateRange?.to,
    }),
    retry: 1,
  });

  // Observa mudanças no erro
  useEffect(() => {
    if (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Erro ao buscar dados.')
      } else {
        toast.error('Erro inesperado.')
      }
    }
  }, [error]);

  const chartData = useMemo(() => {
    return dailyRevenueInPeriod?.map((chartItem) => {
      return {
        date: chartItem.date,
        receipt: chartItem.receipt / 100,
      }
    })
  }, [dailyRevenueInPeriod])

  const chartConfig = {
    receipt: {
      label: "Receita",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">

          <div className="flex justify-between items-center flex-1">
            <div className="space-y-1 ">
              <CardTitle className="text-base font-medium">
                Receita no período
              </CardTitle>
              <CardDescription>Receita diária no período</CardDescription>
            </div>

            <div className="flex items-center gap-3">
              <Label>Período</Label>
              <DateRangePicker date={dateRange} onDateChange={setDateRange} />
            </div>
          </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart accessibilityLayer data={chartData} style={{ fontSize: 12 }}>
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
              dataKey="receipt"
              stroke={colors.violet["400"]}
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
