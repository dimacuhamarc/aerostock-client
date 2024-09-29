import axios from 'axios';
import { sessionValid } from './auth';

const API_URL = process.env.NEXT_PUBLIC_AEROSTOCK_API_PROD;

function getUserData() {
    const first_name = sessionStorage.getItem('first_name')
    const last_name = sessionStorage.getItem('last_name') 
    const employee_id = sessionStorage.getItem('employee_id')
  
    return {
      first_name: first_name,
      last_name: last_name,
      employee_id: employee_id,
    };
}

async function getTotalItemCount() {
  if (sessionValid()) {
    try {
      const response = await axios.get(`${API_URL}/v1/items/total_items`, {
        headers: {
          'Authorization': sessionStorage.getItem('access-token')
        },
      });
      const userData = response.data;
      return userData;
    } catch (error) {
      console.log(error);
    }
  } else {
    return null
  }
}

export {
  getUserData,
  getTotalItemCount
}
