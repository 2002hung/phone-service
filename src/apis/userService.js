import axiosClient from './axiosClient';
import { toast } from 'react-toastify';

export const userRegisterAPI = async (data) => {
  const response = await axiosClient.post(`/users/register`, data)

  toast.success('Account created successfully! Please check and logging in!', {
    theme: 'colored'
  })

  return response.data
}