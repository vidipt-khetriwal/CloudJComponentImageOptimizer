// components/Login.js
import React from "react";
import Container from "../components/Container";

const Login = () => {
  return (
    <Container className="">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex w-full max-w-md flex-col items-center justify-center rounded-lg bg-white px-4 py-8 shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <div className="mb-6 self-center text-xl font-light text-gray-600 dark:text-white sm:text-2xl">
            Welcome Back !
          </div>
          <div className="item-center flex gap-4">
            <button className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-500">
              <div className="mr-2 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-4 w-4"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1536 1344v128q0 26-19 45t-45 19h-384v-384h256q26 0 45 19t19 45zm-512-512v640H896v-640H512v768h1152v-768h-384zm640-128v896q0 40-28 68t-68 28h-640q-40 0-68-28t-28-68V704q0-40 28-68t68-28h640q40 0 68 28t28 68z"></path>
                </svg>
              </div>
              Google
            </button>
            <button className="flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-base font-medium text-white hover:bg-gray-800">
              <div className="mr-2 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-4 w-4"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1393 1088q0-109-65.5-188.5T1112 832q-26 0-78 9-109-109-262.5-174.5T512 640q-136 0-249.5 52T52 832q0 110 73.5 192.5T320 1152h-1q-73 0-127.5-30.5T128 1024q0-43 26-81.5t68-67 92-45.5 102-17H512q77 0 149 28.5t122.5 77 82 109T1024 1152q0 78-31 144 48 9 78 9 155 0 262-90 28 5 43 5 137 0 234-76.5t97-211.5zm-1011-64q0-40 28-68t68-28 68 28 28 68-28 68-68 28-68-28-28-68zm256 256q0-40 28-68t68-28 68 28 28 68-28 68-68 28-68-28-28-68zm384 0q0-40 28-68t68-28 68 28 28 68-28 68-68 28-68-28-28-68z"></path>
                </svg>
              </div>
              Apple
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            <a
              href="#"
              className="text-center text-xs uppercase text-gray-500 hover:underline dark:text-gray-400"
            >
              or login with email
            </a>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <div className="mt-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              type="email"
              name="email"
              placeholder="mik@edenn.co.au"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="loggingPassword"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-500 hover:underline dark:text-gray-300"
              >
                Forget Password?
              </a>
            </div>
            <input
              id="loggingPassword"
              type="password"
              name="password"
              placeholder="***************"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full rounded-md bg-green-400 px-3 py-4 text-white focus:bg-green-500 focus:outline-none"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
