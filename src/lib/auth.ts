const TOKEN_KEY = '@salestrack:token';

interface UserTokenPayload {
  iss: string;
  exp: number;
  sub: string;
  userId: string;

}

export function getAuthToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setAuthToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeAuthToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function hasAuthToken(): boolean {
  return !!getAuthToken();
}

export function decodeToken(): UserTokenPayload | null {
  const token = getAuthToken();
  
  if (!token) return null;
  
  try {
    // O token JWT é dividido em 3 partes por pontos
    // A segunda parte contém os dados (payload)
    const [, payload] = token.split('.');
    // Decodifica o base64 e converte para objeto
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload;
  } catch {
    return null;
  }
}