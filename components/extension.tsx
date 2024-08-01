"use client";
import React, { useEffect } from "react";
type Props = {
  token: string;
};
const Extension: React.FC<Props> = ({ token }) => {
  useEffect(() => {
    if (token) {
      if (typeof chrome !== "undefined" && chrome.runtime) {
        chrome.runtime.sendMessage(
          "fgmjbkjlmlljfmipgpipnkipiohbghal",
          { name: "USER_AUTHENTICATION", token: token || "" },
          (response) => {
            console.log("Response:", response);
          }
        );
      }
    }
  }, [token]);
  return null;
};

export default Extension;
