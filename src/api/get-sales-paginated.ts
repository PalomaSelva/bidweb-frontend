import { api } from '@/lib/axios'

export interface GetSalesPaginatedQuery {
  page: number
  pageSize: number
}

interface GetSalesPaginatedResponse {
  items: {
    id: number
    product: string
    quantity: number
    saleDate: string
    totalValue: number
  }[]
  totalCount: number

}

export async function getSalesPaginated({ page, pageSize }: GetSalesPaginatedQuery) {

  if (!page || !pageSize) {
    throw new Error('Página e quantidade de itens por página são obrigatórios');
  }

  const response = await api.get<GetSalesPaginatedResponse>('/sales', {
    params: {
      page,
      pageSize
    }
  });

  return response.data;
}