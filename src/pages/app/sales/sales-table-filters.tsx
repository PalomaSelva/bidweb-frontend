import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router";
import { z } from "zod";

const SalesTableFiltersSchema = z.object({
  productName: z.string().optional(),
})

type SalesTableFiltersSchema = z.infer<typeof SalesTableFiltersSchema>

export function SalesTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const productName = searchParams.get('productName')

  const { register, handleSubmit, reset } =
    useForm<SalesTableFiltersSchema>({
      resolver: zodResolver(SalesTableFiltersSchema),
      defaultValues: {
        productName: productName ?? '',
      },
    })

  function handleFilter({ productName }: SalesTableFiltersSchema) {
    setSearchParams((state) => {


      if (productName) {
        state.set('productName', productName)
      } else {
        state.delete('productName')
      }

      state.set('page', '1')

      return state
    })
  }

  function handleClearFilters() {
    setSearchParams((state) => {

      state.delete('productName')
      state.set('page', '1')

      return state
    })

    reset({
      productName: '',
    })
  }

  return (
    <form onSubmit={handleSubmit(handleFilter)}>
      <div className="flex md:flex-row flex-col mditems-center gap-2">
        <span className="text-sm font-semibold text-left">Filtros:</span>
        <Input placeholder="Nome do produto" className="h-8 md:w-[328px] w-full" {...register('productName')} />
        <Button
          type="submit"
          variant="secondary"
          className="h-8 w-auto"
          size="sm"
        >
          <Search className="h-4 w-4" />
          Filtrar resultados
        </Button>
        <Button variant="outline" className="h-8 w-auto" size="sm" onClick={handleClearFilters}>
          <X className="h-4 w-4" />
          Limpar filtros
        </Button>
      </div>
    </form>
  );
}
