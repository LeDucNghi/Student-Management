import { axiosClient } from './axiosClient';

export const cityApi = {
  getAll() {
    const url = `/cities`;
    return axiosClient.get(url);
  },
};
