export type AuthData = {
  token: string;
  email: string;
  name: string;
};

const signIn = (email: string, _password: string): Promise<AuthData> => {
  // This is a mock of an API call. In a real app,
  // you would need to connect with some real API,
  // send email and password, and if credentials are correct,
  // the API will resolve with some token and other data as below.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: JWTTokenMock,
        email: email,
        name: "User Name",
      });
    }, 1000);
  });
};

const signUp = (
  email: string,
  _password: string,
  name: string
): Promise<AuthData> => {
  // This is a mock of an API call. In a real app,
  // you would need to connect with some real API,
  // send email, password, and name, and if registration is successful,
  // the API will resolve with some token and other data as below.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: JWTTokenMock,
        email: email,
        name: name,
      });
    }, 1000);
  });
};

export const authService = {
  signIn,
  signUp,
};

const JWTTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64";
