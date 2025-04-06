import { api } from '@/lib/axios'

export type GetTopProductsResponse = {
  product: string
  amount: number
}[]

export async function getTopProducts() {
  const response = await api.get<GetTopProductsResponse>(
    '/sales/top-products',
  )

  return response.data
}