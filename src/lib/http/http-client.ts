/* eslint-disable no-console */

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

import { getConfig } from '@/config';
import type { HttpHeader, HttpMethod } from '@/types';
import { HEADER_KEY, HEADERS } from '@/constants';

const { baseApiUrl, isDevelopment } = getConfig();

export interface RequestConfig<D> {
  method?: HttpMethod;
  path: string;
  data?: D;
  config?: AxiosRequestConfig<D>;
  withAuthorization?: boolean;
}

const defaultHeaders: HttpHeader = {
  ...HEADERS.CONTENT_TYPE_JSON,
  ...HEADERS.ACCEPT_JSON,
};

export class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(config: CreateAxiosDefaults) {
    this.axiosInstance = axios.create(config);

    this.axiosInstance.interceptors.request.use(
      this.handleRequest,
      this.handleError
    );

    this.axiosInstance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  }

  private handleRequest(
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig {
    if (isDevelopment) {
      console.log('Request: ', config);
    }
    return config;
  }

  private handleResponse(response: AxiosResponse): AxiosResponse {
    if (isDevelopment) {
      console.log('Response:', response);
    }
    return response;
  }

  private handleError(error: unknown): Promise<unknown> {
    if (isDevelopment) {
      console.error('HTTP Error:', error);
    }
    return Promise.reject(error);
  }

  private getToken(): string | null {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return null;
    }
    return token;
  }

  public async request<TResponse = unknown, TData = unknown>({
    method = 'GET',
    path,
    config,
    data,
    withAuthorization = true,
  }: RequestConfig<TData>): Promise<TResponse> {
    let axiosConfig: AxiosRequestConfig<TData> = {
      method,
      url: path,
      data,
      ...config,
    };

    if (withAuthorization) {
      const token = this.getToken();
      if (token) {
        axiosConfig = {
          ...axiosConfig,
          headers: {
            ...axiosConfig?.headers,
            [HEADER_KEY.AUTHORIZATION]: `Bearer ${token}`,
          },
        };
      }
    }

    const response = await this.axiosInstance.request<TResponse>(axiosConfig);

    return response.data;
  }
}

const httpClient = new HttpClient({
  baseURL: baseApiUrl,
  timeout: 5000,
  headers: { ...defaultHeaders },
});

export const makeRequest = httpClient.request.bind(httpClient);
