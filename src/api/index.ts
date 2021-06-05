import axios, { Method, AxiosResponse } from 'axios';
import { endpoint } from '../utils/apitConstants';

const api = axios.create({
  baseURL: endpoint,
});

const request = <T>(
  method: Method,
  url: string,
  // eslint-disable-next-line
  params?: any,
): Promise<AxiosResponse<T>> => {
  return api.request<T>({ method, url, params });
};

export default request;
