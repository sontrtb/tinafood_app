import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {store} from '@app/src/redux/store';
import {showToast} from '@app/src/utils/toats';
import {NETWORK_CONFIG} from '@app/src/config/network';

export interface IDataError {
  message?: string;
  errorCode?: string;
}

interface IResponseDTO {
  success?: boolean;
  errorCode?: string;
  message?: string;
  data?: any;
}

interface IFetcherOptions {
  token?: string;
  withToken?: boolean;
  displayError?: boolean;
}

function displayError(dataError: IDataError): void {
  console.log('dataError', dataError);
  let errorMessage;
  if (dataError.message) {
    errorMessage = dataError.message;
  } else if (dataError.errorCode) {
    errorMessage = dataError.errorCode;
  }
  showToast(errorMessage ?? 'Somethings Wrong');
}

export function fetcher<T>(
  config: AxiosRequestConfig,
  options: IFetcherOptions = {},
): Promise<T> {
  const defaultOptions: IFetcherOptions = {
    withToken: NETWORK_CONFIG.USE_TOKEN,
    displayError: NETWORK_CONFIG.DISPLAY_ERROR,
    ...options,
  };

  const apiClient = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: NETWORK_CONFIG.API_BASE_URL,
    timeout: NETWORK_CONFIG.TIMEOUT,
  });
  const state = store.getState();

  // Access Token
  if (defaultOptions.token) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${defaultOptions.token}`;
  } else {
    if (defaultOptions.withToken) {
      const token = state.auth.token;
      if (token) {
        apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
      }
    }
  }

  return new Promise<never>((resolve, reject) => {
    apiClient
      .request<IResponseDTO>(config)
      .then(async response => {
        if (response.data) {
          if (response.data.success) {
            resolve(response.data.data);
            return;
          }

          const dataError: IDataError = {
            errorCode: response.data.errorCode,
            message: response.data.message,
          };

          if (defaultOptions.displayError) {
            displayError(dataError);
          }
          reject(dataError);
        }
      })
      .catch((error: AxiosError) => {
        if (axios.isAxiosError(error)) {
          console.log('error', error);
        } else {
          // Native error
        }
        return reject(error.response?.data);
      });
  });
}
