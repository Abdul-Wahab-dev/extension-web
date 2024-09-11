"use client";
import React, { FC, useEffect } from "react";
import { useAuthentication } from "@/store/auth";
type Props = any;
const AuthUser: FC<Props> = ({ user, children }) => {
  const setCurrentUser = useAuthentication((state) => state.setCurrentUser);
  useEffect(() => {
    setCurrentUser(user);
  }, []);
  return <>{children}</>;
};

export default AuthUser;
