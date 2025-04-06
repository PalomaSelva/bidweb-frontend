import { api } from "@/lib/axios";

interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

export async function signUp(request: SignUpRequest) {
  const response = await api.post("/users", request);
  return response.data;
}
