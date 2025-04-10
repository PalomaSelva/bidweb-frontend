
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function SalesTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Skeleton className="h-4 w-[40px] lg:w-[72px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[50px] md:w-[100px] lg:w-[548px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[80px] md:w-[100px] lg:w-[510px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[80px] md:w-[200px] lg:w-[600px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[90px] md:w-[200px] lg:w-[600px]" />
        </TableCell>
      
    
      </TableRow>
    )
  })
}