import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_AEROSTOCK_API_PROD;

function getUserData() {
    const first_name = JSON.parse(sessionStorage.getItem('first_name'));
    const last_name = JSON.parse(sessionStorage.getItem('last_name') || 'null');
    const employee_id = JSON.parse(sessionStorage.getItem('employee_id') || 'null');
  
    return {
      first_name: first_name,
      last_name: last_name,
      employee_id: employee_id,
    };

}

export {
  getUserData
}
