import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { SalesTableRow } from "./sales-table-row";
import { SalesTableFilters } from "./sales-table-filters";

export function Sales() {
  return (
    <>
      <Helmet title="Vendas" />
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Vendas</h1>
      </div>
      <div className="space-y-2.5">
        <SalesTableFilters />
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
                return <SalesTableRow key={index} />;
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
