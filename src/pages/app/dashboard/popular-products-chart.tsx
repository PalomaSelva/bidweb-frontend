import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { YAxis, XAxis, Bar, BarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import colors from "tailwindcss/colors";
import { useQuery } from "@tanstack/react-query";
import { getTopProducts } from "@/api/get-top.products";
export function PopularProductsChart() {
  const { data: topProducts = [] } = useQuery({
    queryKey: ['sales', 'popular-products'],
    queryFn: getTopProducts,
     retry: 1,
  });

  const getColorIntensity = (vendas: number, maxVendas: number) => {
    const intensity = Math.floor((vendas / maxVendas) * 100);
    const colorValues = [100, 200, 300, 400, 500, 600, 700, 800];

    const index = Math.min(
      Math.floor((intensity * colorValues.length) / 100),
      colorValues.length - 1,
    );

    return colorValues[index].toString() as keyof typeof colors.violet;
  };

  const maxVendas = Math.max(...topProducts.map((item) => item.amount), 0);

  const dataWithColors = topProducts.map((item) => ({
    ...item,
    fill: colors.violet[getColorIntensity(item.amount, maxVendas)],
  }));

  const chartConfig = dataWithColors.reduce((acc, item) => {
    acc[item.product] = {
      label: item.product.charAt(0).toUpperCase() + item.product.slice(1),
      color: item.fill,
    };
    return acc;
  }, {} as ChartConfig);

  chartConfig.amount = { label: "Vendas" };

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Produtos mais vendidos
          </CardTitle>
          <CardDescription>Produtos mais vendidos no mês atual</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={dataWithColors}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="product"
              type="category"
              tickLine={false}
              tickMargin={1}
              width={60}
              axisLine={false}
            />
            <XAxis dataKey="amount" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="amount" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}