import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

export function SalesTableFilters() {
  return (
    <form>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">Filtros:</span>
        <Input placeholder="Id da venda" className="h-8 w-auto" />
        <Input placeholder="Nome do produto" className="h-8 w-[328px]" />
        <Button
          type="submit"
          variant="secondary"
          className="h-8 w-auto"
          size="sm"
        >
          <Search className="h-4 w-4" />
          Filtrar resultados
        </Button>
        <Button variant="outline" className="h-8 w-auto" size="sm">
          <X className="h-4 w-4" />
          Limpar filtros
        </Button>
      </div>
    </form>
  );
}
