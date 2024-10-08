"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { useAuthentication } from "@/store/auth";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const googleLogin = useAuthentication((state) => state.googleLogin);
  const loginWithemailAndPasswrd = useAuthentication(
    (state) => state.loginWithemailAndPasswrd
  );
  const errors = useAuthentication((state) => state.error);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const token = await loginWithemailAndPasswrd(email, password);
      if (token) {
        if (typeof chrome !== "undefined" && chrome.runtime) {
          chrome.runtime.sendMessage(
            "mmaidogdkpmcnbjepbfhicpecemdeiij",
            { name: "USER_AUTHENTICATION", token: token || "" },
            (response) => {
              console.log("Response:", response);
            }
          );
        }
        router.replace("/");
      }
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  };
  const handleGoogleSignIn = async () => {
    const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;

    try {
      const res = await googleLogin(redirectUrl);
      if (res) {
        const a = document.createElement("a");
        a.href = res.url;
        a.target = "_self";
        a.click();
      }
    } catch (error) {
      toast.error("Failed to process you request");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-cultured">
      <div className="bg-white p-10 rounded-lg shadow-xl w-96">
        {errors && errors.message && (
          <div className="border border-red-300 rounded-lg  bg-red-50 dark:text-red-400 p-2 text-red-800 mb-2">
            {errors && errors.message}
          </div>
        )}

        <h1 className="text-black text-2xl mb-5 text-center">Login</h1>
        <div className="flex flex-col gap-3">
          <div className="flex-1 relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 bg-cultured rounded outline-none text-gray-500 placeholder-gray-500"
            />
          </div>
          <div className="flex-1 relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 bg-cultured rounded outline-none text-gray-500 placeholder-gray-500"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full p-3 bg-primary rounded text-white flex items-center justify-center gap-2"
          >
            <span>Login</span>
            {loading ? <div className="spinner" id="spinner"></div> : null}
          </button>
          <div className="flex items-center gap-3 my-3">
            <div className="h-[1px] sm:w-[166px] w-[130px] bg-gray-300"></div>
            <p className="text-[16px] text-gray-500 ">OR</p>
            <div className="h-[1px] sm:w-[166px] w-[130px] bg-gray-300"></div>
          </div>
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="text-gray-500  border flex gap-2  border-gray-500 m-auto  rounded px-5 py-2.5 text-center justify-center items-center w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M19.8927 8.0415H19.1209V8H10.4966V12H15.9122C15.1221 14.3285 12.9991 16 10.4966 16C7.32142 16 4.74707 13.3135 4.74707 10C4.74707 6.6865 7.32142 4 10.4966 4C11.9622 4 13.2956 4.577 14.3109 5.5195L17.0213 2.691C15.3099 1.0265 13.0206 0 10.4966 0C5.20464 0 0.914062 4.4775 0.914062 10C0.914062 15.5225 5.20464 20 10.4966 20C15.7885 20 20.0791 15.5225 20.0791 10C20.0791 9.3295 20.013 8.675 19.8927 8.0415Z"
                fill="#FFC107"
              />
              <path
                d="M2.01953 5.3455L5.16787 7.755C6.01976 5.554 8.08287 4 10.4972 4C11.9628 4 13.2962 4.577 14.3115 5.5195L17.0219 2.691C15.3105 1.0265 13.0212 0 10.4972 0C6.81654 0 3.6246 2.1685 2.01953 5.3455Z"
                fill="#FF3D00"
              />
              <path
                d="M10.4957 19.9996C12.9709 19.9996 15.2199 19.0111 16.9203 17.4036L13.9545 14.7846C12.9601 15.5738 11.745 16.0006 10.4957 15.9996C8.00327 15.9996 5.88697 14.3411 5.0897 12.0266L1.96484 14.5391C3.55075 17.7776 6.77144 19.9996 10.4957 19.9996Z"
                fill="#4CAF50"
              />
              <path
                d="M19.8922 8.0415H19.1204V8H10.4961V12H15.9117C15.5337 13.1082 14.853 14.0766 13.9535 14.7855L13.9549 14.7845L16.9207 17.4035C16.7108 17.6025 20.0786 15 20.0786 10C20.0786 9.3295 20.0125 8.675 19.8922 8.0415Z"
                fill="#1976D2"
              />
            </svg>
            <span>continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
