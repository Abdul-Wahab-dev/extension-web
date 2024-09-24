import AppError from "@/utils/appError";

// signin with google
export const loginWithGoogle = async (redirectUrl: string) => {
  // const provider = new GoogleAuthProvider();
  try {
    const res = await fetch(
      `http://3.141.101.121/api/v1/users/google-login?return_uri=${redirectUrl}`,
      {
        method: "GET",
      }
    );
    if (!res.ok) {
      const response = await res.json();
      const statusCode = response.status || 400;
      const message =
        response.message && response.message.length
          ? response.message
          : response;

      throw new AppError(message, statusCode, response.validation ?? null);
    }
    return await res.json();
  } catch (err) {
    throw err;
  }
};

// signout

export const logout = async () => {
  try {
    const result = await fetch("http://3.141.101.121/api/v1/users/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!result.ok) {
      const res = await result.json();
      throw new Error(res.message);
    }

    const res = await result.json();
    return true;
  } catch (error) {
    throw error;
  }
};

// login with email
export const loginWithEmail = async (email: string, password: string) => {
  try {
    const res = await fetch("http://3.141.101.121/api/v1/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!res.ok) {
      const response = await res.json();
      const statusCode = response.status || 400;
      const message =
        response.message && response.message.length
          ? response.message
          : response;

      throw new AppError(message, statusCode, response.validation ?? null);
    }
    const parsedResult = await res.json();
    return parsedResult;
  } catch (error) {
    throw error;
  }
};

export const signupWithEmailAndPassword = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const res = await fetch("http://3.141.101.121/api/v1/users/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password: password,
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const error = await res.json();
      console.log(error);
      throw new Error(error.message);
    }
    const parsedResult = await res.json();
    return parsedResult;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const res = await fetch("http://3.141.101.121/api/v1/users/current-user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!res.ok) {
      const error = await res.json();

      throw new Error(error.message);
    }
    const parsedResult = await res.json();
    return parsedResult;
  } catch (error) {
    return false;
  }
};
