import axiosClient from './axiosClient';

export const getAllBrandAPI = async () => {
  const response = await axiosClient.get('/brands')

  return response.data
}