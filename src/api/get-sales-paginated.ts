import { api } from '@/lib/axios'

export interface GetSalesPaginatedQuery {
  page: number
  pageSize: number
  productName?: string
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

export async function getSalesPaginated({ page, pageSize,  productName }: GetSalesPaginatedQuery) {

  if (!page || !pageSize) {
    throw new Error('Página e quantidade de itens por página são obrigatórios');
  }

  const response = await api.get<GetSalesPaginatedResponse>('/sales', {
    params: {
      page,
      pageSize,
      productName
    }
  });

  return response.data;
}