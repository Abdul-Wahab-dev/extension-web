"use client";
import React, { useEffect } from "react";
type Props = {
  token: string;
};
const Extension: React.FC<Props> = ({ token }) => {
  useEffect(() => {
    if (token) {
      if (window) {
        chrome.runtime.sendMessage(
          process.env.NEXT_PUBLIC_EXTENSION_ID,
          {
            type: "USER_AUTHENTICATION",
            token,
          },
          () => {}
        );

        window.postMessage(
          { type: "USER_AUTHENTICATION", token: token || "" },
          "*"
        );
      }
    }
  }, [token]);
  return null;
};

export default Extension;
