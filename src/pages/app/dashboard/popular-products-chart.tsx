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

export function PopularProductsChart() {
  const data = [
    {
      produto: "RTX 4060 Ti",
      vendas: 40,
    },
    {
      produto: "Logitech G Pro X",
      vendas: 30,
    },
    {
      produto: "HyperX Cloud II",
      vendas: 15,
    },
    {
      produto: "MacBook Air M2",
      vendas: 75,
    },
    {
      produto: "Dell XPS 15",
      vendas: 22,
    },
    {
      produto: "Corsair Vengeance 32GB DDR5",
      vendas: 54,
    },
    {
      produto: "Kingston Fury Beast 16GB DDR4",
      vendas: 44,
    },
  ];

  const getColorIntensity = (vendas: number, maxVendas: number) => {
    // Calcula a intensidade baseada na proporção de vendas
    const intensity = Math.floor((vendas / maxVendas) * 100);
    // Mapeia a intensidade para um valor entre 100 e 800
    const colorValues = [100, 200, 300, 400, 500, 600, 700, 800];

    const index = Math.min(
      Math.floor((intensity * colorValues.length) / 100),
      colorValues.length - 1,
    );
    return colorValues[index].toString() as keyof typeof colors.violet;
  };

  // Encontra o valor máximo de vendas
  const maxVendas = Math.max(...data.map((item) => item.vendas));

  // Adiciona a cor baseada na intensidade das vendas
  const dataWithColors = data.map((item) => ({
    ...item,
    fill: colors.violet[getColorIntensity(item.vendas, maxVendas)],
  }));

  // Criando chartConfig baseado nos dados recebidos
  const chartConfig = dataWithColors.reduce((acc, item) => {
    acc[item.produto] = {
      label: item.produto.charAt(0).toUpperCase() + item.produto.slice(1),
      color: item.fill,
    };
    return acc;
  }, {} as ChartConfig);

  chartConfig.vendas = { label: "Vendas" };

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Produtos mais vendidos
          </CardTitle>
          <CardDescription>Produtos mais vendidos no período</CardDescription>
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
              dataKey="produto"
              type="category"
              tickLine={false}
              tickMargin={10}
              width={120}
              axisLine={false}
            />
            <XAxis dataKey="vendas" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="vendas" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
