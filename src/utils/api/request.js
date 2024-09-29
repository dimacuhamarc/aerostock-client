import axios from 'axios';
import { sessionValid } from './auth';

const API_URL = process.env.NEXT_PUBLIC_AEROSTOCK_API_PROD;

async function createItem(data) {
  if (sessionValid()) {
    try {
      const response = await axios.post(`${API_URL}/v1/items`, data, {
        headers: {
          Authorization: sessionStorage.getItem('access-token'),
        },
      });
      const responseData = response.data;
      return responseData;
    } catch (error) {
      console.error(error);
    }
  }
}

async function deleteItem(id) {
  if (sessionValid()) {
    try {
      const response = await axios.delete(`${API_URL}/v1/items/${id}`, {
        headers: {
          Authorization: sessionStorage.getItem('access-token'),
        },
      });
      const responseData = response.data;
      return responseData;
    } catch (error) {
      console.error(error);
    }
  }
}

async function updateItem(data, id) {
  if (sessionValid()) {
    try {
      const response = await axios.patch(`${API_URL}/v1/items/${id}`, data, {
        headers: {
          Authorization: sessionStorage.getItem('access-token'),
        },
      });
      const responseData = response.data;
      return responseData;
    } catch (error) {
      console.error(error);
    }
  }
}

export { createItem, deleteItem, updateItem };