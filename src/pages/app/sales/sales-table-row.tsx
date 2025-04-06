import { TableRow, TableCell } from "@/components/ui/table";
import { format } from "date-fns";
import { formatCurrency } from '@/lib/utils';


export interface SalesTableRowProps {
  sale: {
    id: number
    product: string
    quantity: number
    saleDate: string
    totalValue: number
  }
}
export function SalesTableRow({ sale }: SalesTableRowProps) {
  return (
    <TableRow>
      <TableCell>{sale.id}</TableCell>
      <TableCell>{sale.product}</TableCell>
      <TableCell>{sale.quantity}</TableCell>
      <TableCell>{format(new Date(sale.saleDate), 'dd/MM/yyyy')}</TableCell>
      <TableCell>{formatCurrency(sale.totalValue)}</TableCell>
    </TableRow>
  );
}
