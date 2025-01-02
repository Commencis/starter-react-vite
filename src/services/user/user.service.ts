import { makeRequest } from '@/lib';

export type UserResponse = {
  name: string;
  email: string;
};

class UserService {
  public async fetchUserById(userId: string): Promise<UserResponse> {
    try {
      const response = await makeRequest<UserResponse, { userId: string }>({
        method: 'GET',
        path: `/user/${userId}`,
      });
      return response;
    } catch (error) {
      if (error instanceof Error && error.message) {
        throw new Error(`Failed to fetch user: ${error.message}`);
      } else {
        throw new Error('Failed to fetch user: Unknown error occurred');
      }
    }
  }
}

export const userService = new UserService();
