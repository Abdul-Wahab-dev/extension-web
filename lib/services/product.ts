import axios from "axios";
import AppError from "@/utils/appError";

export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/v1/product/", {
      method: "GET",
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

export const handleContact = async (
  email: string,
  subject: string,
  detail: string
) => {
  try {
    const res = await fetch("http://localhost:8000/api/v1/contact", {
      method: "POST",
      body: JSON.stringify({
        email,
        subject,
        detail,
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
