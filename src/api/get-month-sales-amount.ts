import { api } from '@/lib/axios'

export interface GetMonthSalesAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthSalesAmount() {
  const response = await api.get<GetMonthSalesAmountResponse>(
    '/sales/month-products-sold',
  )

  return response.data
}