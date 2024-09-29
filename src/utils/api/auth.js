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
    sessionStorage.setItem('uid', JSON.stringify(userData.uid));
    return userData;
  } catch (error) {
    console.log(error);
  }
}

async function authOtpSignIn(payload) {
  try {
    const response = await axios.post(`${API_URL}/users/verify_otp`, {
      user_id: Number(sessionStorage.getItem('uid')),
      otp: payload.otp,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    const userData = response.data;
    sessionStorage.setItem('access-token', userData.token);
    sessionStorage.setItem('first_name', userData.first_name);
    sessionStorage.setItem('last_name', userData.last_name);
    sessionStorage.setItem('employee_id', userData.employee_id);
    return userData;
  } catch (error) {
    console.log(error);
  }
}

async function authSignUp(payload) {
  try {
    const response = await axios.post(`${API_URL}/sign_up`, {
      user: {
        email: payload.email,
        password: payload.password,
        first_name: payload.first_name,
        last_name: payload.last_name,
      },
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    const userData = response.data;
    return userData;
  } catch (error) {
    console.log(error);
  }
}

function secureOtpPage() {
  const uid = JSON.parse(sessionStorage.getItem('uid'));
  const token = sessionStorage.getItem('access-token');
  if (!uid || !token) {
    return true;
  }
  return false;
}

function restrictOnboarding() {
  const token = sessionStorage.getItem('access-token');
  if (!token) {
    return true;
  }
  return false;
}

function sessionValid() {
  const uid = JSON.parse(sessionStorage.getItem('uid'));
  const token = sessionStorage.getItem('access-token');

  if (uid && token) {
    return true;
  } else {
    return false
  }
}

export {
  authSignIn,
  secureOtpPage,
  authOtpSignIn,
  restrictOnboarding,
  authSignUp,
  sessionValid
}