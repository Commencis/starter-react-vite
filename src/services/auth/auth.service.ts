import { makeRequest } from '@/lib';

export type LoginCredentials = {
  username: string;
  password: string;
};

export type AuthResponse = {
  userId: string;
  accessToken: string;
};

const ACCESS_TOKEN_KEY = 'accessToken';

class AuthService {
  private accessTokenKey = ACCESS_TOKEN_KEY;

  public async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await makeRequest<AuthResponse, LoginCredentials>({
        method: 'POST',
        path: '/auth/login',
        data: credentials,
        withAuthorization: false,
      });

      this.setAccessToken(response.accessToken);
      return response;
    } catch (error) {
      if (error instanceof Error && error.message) {
        throw new Error(`Login Failed: ${error.message}`);
      } else {
        throw new Error('Login Failed: Unknown error occurred');
      }
    }
  }

  public async logout(userId: string): Promise<AuthResponse> {
    try {
      const response = await makeRequest<AuthResponse, { userId: string }>({
        method: 'POST',
        path: '/auth/logout',
        data: { userId },
      });

      this.clearAccessToken();
      return response;
    } catch (error) {
      if (error instanceof Error && error.message) {
        throw new Error(`Logout Failed: ${error.message}`);
      } else {
        throw new Error('Logout Failed: Unknown error occurred');
      }
    }
  }

  private setAccessToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }

  private clearAccessToken(): void {
    localStorage.removeItem(this.accessTokenKey);
  }
}

export const authService = new AuthService();
