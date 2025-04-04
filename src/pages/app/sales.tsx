import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Helmet } from "react-helmet-async";

export function Sales() {
  return (
    <>
      <Helmet title="Vendas" />
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Vendas</h1>
      </div>
      <div className="space-y-2.5">
        <form>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros</span>
            <Input placeholder="Nome do produto" className="h-8 w-[328px]" />
          </div>
        </form>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Valor total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>Produto {index + 1}</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>2024-01-01</TableCell>
                    <TableCell>R$ 100,00</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
