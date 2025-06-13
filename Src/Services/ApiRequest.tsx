import axios, {AxiosError, AxiosResponse} from 'axios';
// import {internetErrorMessage, timeOut} from '../Constants/functions';
import {BASE_URL} from './Baseurls';

import {timeOut} from '../Utils/helperFn';

import NetInfo from '@react-native-community/netinfo';

import {Logger} from '../Utils/Logger';
import store from '../Redux/Store';

type HttpMethod = 'get' | 'post' | 'delete';

interface ApiRequestParams {
  endPoint: string;
  method: HttpMethod;
  query?: Record<string, any>;
  customHeader?: string;
}

// Function to check internet connection
export const checkInternetConnected = async () => {
  const internetState = await NetInfo.fetch();
  return internetState.isConnected;
};

export default async function ApiRequest({
  endPoint,
  method,
  query = {},
  customHeader = '',
}: ApiRequestParams): Promise<any> {
  const isConnected = await checkInternetConnected();
  if (!isConnected) {
    console.error('INTERNET CONNECTION LOST');
    throw new Error(internetErrorMessage);
  }

  const url = `${BASE_URL}${endPoint}`;
  const user = store.getState().user.user;
  const USER_TOKEN = user?.token;

  let headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (USER_TOKEN) {
    headers.Authorization = `Bearer ${USER_TOKEN}`;
  } else if (customHeader) {
    headers = customHeader;
  }

  console.log('API Method--', method);
  Logger('u', method + ' ' + url);
  console.log('API headers--', headers);
  console.log('API payload--', query);
  try {
    let response: AxiosResponse;

    switch (method) {
      case 'get':
        response = await timeOut(axios.get(url, {headers}));
        break;
      case 'post':
        response = await timeOut(axios.post(url, query, {headers}));
        break;
      case 'delete':
        response = await timeOut(axios.delete(url, {headers}));
        break;
      default:
        throw new Error(`Unsupported request method: ${method}`);
    }

    return response.data;
  } catch (error) {
    if (error?.status == 500) {
      throw new Error('Oops! Server connection lost');
    } else {
      throw error;
    }
  }
}
