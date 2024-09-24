import axios from "axios";
import AppError from "@/utils/appError";

export const createSubscription = async (priceId: number) => {
  try {
    const res = await fetch("http://3.141.101.121/api/v1/subscription", {
      method: "POST",
      body: JSON.stringify({
        priceId,
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
export const updateSubscription = async (priceId: number) => {
  try {
    const res = await fetch("http://3.141.101.121/api/v1/subscription/update", {
      method: "POST",
      body: JSON.stringify({
        priceId,
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

export const billingPortal = async () => {
  try {
    const res = await fetch("http://3.141.101.121/api/v1/billing-portal", {
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
