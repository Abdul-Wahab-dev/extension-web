import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const auth = {
  isAuthenticated,
  verifyToken,
};

function isAuthenticated() {
  try {
    verifyToken();
    return true;
  } catch (err) {
    return false;
  }
}

function verifyToken() {
  const cookie = cookies().get("authorization")?.value ?? "";

  const token = cookie.split(" ")[1];

  if (!token) {
    throw Error("unauthorized");
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    throw Error("unauthorized");
  }
  const id = decoded.sub;
  return token;
}
