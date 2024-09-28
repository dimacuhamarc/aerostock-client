interface SIGN_IN_INPUT {
  email: string;
  password: string;
}

interface SIGN_UP_INPUT {
  email: string;
  password: string;
  confirmPassword: string;
}

export type { SIGN_IN_INPUT, SIGN_UP_INPUT };