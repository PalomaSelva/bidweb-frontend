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
import { Pagination } from "@/components/pagination";
import { getSalesPaginated } from "@/api/get-sales-paginated";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export function Sales() {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = Number(searchParams.get('page')) || 1

  const { data: sales, isLoading } = useQuery({
    queryKey: ['sales', page],
    queryFn: () => getSalesPaginated({ page, pageSize: 10 }),
  });

  function handlePageChange(page: number) {
    setSearchParams((state) => {
      state.set('page', (page).toString())
      return state
    })
  }

  return (
    <>
      <Helmet title="Vendas" />
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Vendas</h1>

        <div className="space-y-4">
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
                {sales && sales.items.map((sale) => {
                  return <SalesTableRow key={sale.id} sale={sale} />;
                })}
              </TableBody>
            </Table>
          </div>
          {
            sales && (
              <Pagination
                page={page}
                totalCount={sales?.totalCount || 0}
                perPage={10}
                onPageChange={handlePageChange}
              />
            )
          }
        </div>
      </div>
    </>
  );
}
