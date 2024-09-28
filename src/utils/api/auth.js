import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_AEROSTOCK_API_PROD;


async function authSignIn(payload) {
  try {
    const response = await axios.post(`${API_URL}/sign_in`, {
      user: {
        email: payload.email,
        password: payload.password,
      },
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    const userData = response.data;
    console.log(userData)
  } catch (error) {
    console.log(error);
  }
}

export {
  authSignIn
}