import { api } from "@/lib/axios";

interface SignInRequest {
  email: string;
  password: string;
}

export async function signIn(request: SignInRequest) {
  const response = await api.post("/auth/login", request);
  return response.data;
}
