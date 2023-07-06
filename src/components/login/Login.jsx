import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const url = "http://localhost:9000/user?email";
  const [users, setUsers] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const data = () => {
    const url1 = "http://localhost:9000/user";
    fetch(`${url1}`)
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        setUsers(users);
      });
  };
  useEffect(() => {
    data();
  }, []);
  const [messageAll, setMessageAll] = useState(false);
  const [acces, setAcces] = useState(false);
  return (
    <>
      <div className=" bg-white w-full h-screen flex justify-center items-center min-w-[520px]  ">
        <div className="container rounded-3xl  bg-slate-100 max-w-lg mx-auto  flex flex-col items-center justify-center px-2">
          <h1 className="text-4xl py-4 font-medium">Login</h1>
          <div className="my-5">
            <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                className="w-6 h-6"
                alt=""
              />{" "}
              <span>Login with Google</span>
            </button>
          </div>
          <form
            action=""
            className="bg-slate-100 px-6 py-8 rounded shadow-md text-black w-full"
            onSubmit={handleSubmit((data) => {
              users.map((user) => {
                if (
                  user.email === data.email &&
                  user.password === data.password
                ) {
                  console.log(user.email);
                  console.log("user.email");
                  setAcces(!acces);
                  navigate("/AddProudect");
                } else {
                  setMessageAll(!messageAll);
                }
              });
            })}
          >
            <div className="flex flex-col space-y-5">
              <label htmlFor="email">
                <input
              
                  id="email"
                  name="email"
                  type="email"
                  {...register("email", {
                    required: { value: true, message: "email is required" },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please Enter A Valid Email!",
                    },
                    emailAvailable: async (fieldValue) => {
                      const res = await fetch(`${url}=${fieldValue}`);
                      const data = await res.json();
                      return data.length == 0 || "email already exists";
                    },
                  })}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter email address"
                />
                <p className="text-red-600 text-left text-lg">
                  {errors.email?.message}
                </p>
              </label>
              <label htmlFor="password">
                <input
                  /*                   onChange={(e) => {
                    setPassword(e.target.value);
                  }} */
                  id="password"
                  name="password"
                  type="password"
                  {...register("password", {
                    required: { value: true, message: "password is required" },
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long!",
                    },
                  })}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter your password"
                />
                <p className="text-red-600 text-left text-lg">
                  {errors.password?.message}{" "}
                  {messageAll && "email or password incorrect"}
                </p>
              </label>
              <div className="flex flex-row justify-between">
                <div>
                  <label htmlFor="remember" className="">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 border-slate-200 focus:bg-green-600"
                    />
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="#" className="font-medium text-green-600">
                    forgot Password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-600 hover:shadow inline-flex space-x-2 items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Login</span>
              </button>
              {/*  <div onClick={loginsubmit}>
              {!acces ? (
                <ButtonLogin />
              ) : (
                <Link
                  className="w-full py-3 font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg border-green-600 hover:shadow inline-flex space-x-2 items-center justify-center"
                  to={"/AddProudect"}
                >
                  Acces
                </Link>
              )}</div> */}
              <p className="text-center">
                Not registered yet?{" "}
                <Link
                  to="/singup"
                  className="text-green-600 font-medium inline-flex space-x-1 items-center"
                >
                  <span>Register now </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
