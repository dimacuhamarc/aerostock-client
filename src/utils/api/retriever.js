import axios from 'axios';
import { sessionValid } from './auth';

const API_URL = process.env.NEXT_PUBLIC_AEROSTOCK_API_PROD;

function getUserData() {
  const first_name = sessionStorage.getItem('first_name');
  const last_name = sessionStorage.getItem('last_name');
  const employee_id = sessionStorage.getItem('employee_id');

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
          Authorization: sessionStorage.getItem('access-token'),
        },
      });
      const userData = response.data;
      return userData;
    } catch (error) {
      console.log(error);
    }
  } else {
    return null;
  }
}

async function getItems(opts = {}) {
  // Destructure opts to get page and items
  const { page = 1, items = 10, top = false, new_items = false } = opts;

  // Construct URL with both page and items parameters
  const url = `${API_URL}/v1/items?page=${page}&items=${items}&top=${top}&new_items=${new_items}`;

  // Check if session is valid
  if (sessionValid()) {
    try {
      // Make the API request with authorization header
      const response = await axios.get(url, {
        headers: {
          Authorization: sessionStorage.getItem('access-token'),
        },
      });

      // Return the response data
      return response.data;
    } catch (error) {
      // Handle error case
      console.log('Error fetching items:');
      return null;
    }
  } else {
    // If session is not valid, return null
    return null;
  }
}

export { getUserData, getTotalItemCount, getItems };
