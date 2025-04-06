import { api } from '@/lib/axios'
import { decodeToken } from '@/lib/auth'

interface GetProfileResponse {
  id: string
  name: string
  email: string
}

export async function getProfile() {
  const token = decodeToken();
  const userId = token?.userId;
  if (!userId) {
    throw new Error('Usuário não autenticado');
  }

  const response = await api.get<GetProfileResponse>(`/users/${userId}`);

  return response.data;
}