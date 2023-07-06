import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const SingUp = () => {
  const navigate = useNavigate();
  const url = "http://localhost:9000/user?email";
  const [data, setData] = useState([]);
  const updatedata = () => {
    const data = getValues();
    fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(getValues()),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setData(json.data));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  console.log(getValues());
  return (
    <>
      <div className="bg-white h-screen  flex flex-col justify-center items-center min-w-[520px]  md:pt-0">
        <div className=" container rounded-3xl  bg-slate-100 max-w-lg mx-auto  flex flex-col items-center justify-center px-2">
          <div className="my-5 w-3/4">
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
            onSubmit={handleSubmit((data) => {
              updatedata();
              setData(JSON.stringify(data));
              navigate("/AddProudect");
            })}
            noValidate
            className="bg-slate-100 px-6 py-8 rounded shadow-md text-black w-full"
          >
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullName"
              /*  value={data.fullName} */
              placeholder="Full Name"
              {...register("fullName", {
                required: { value: true, message: "Full Nameis required" },
              })}
            />
            <p className="text-red-600 text-left text-lg">
              {errors.fullname?.message}
            </p>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              /*  value={data.email} */
              {...register("email", {
                required: { value: true, message: "email is required" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please Enter A Valid Email!",
                },
                /*    emailAvailable: async (fieldValue) => {
                  const response = await fetch(
                    `http://localhost:9000/user?email=${fieldValue}`
                  );
                  const data = await response.json();
                  return data.length == 0 || "email already exists";
                }, */
                emailAvailable: async (fieldValue) => {
                  const response = await fetch(
                    `http://localhost:9000/user?email=${fieldValue}`
                  );
                  const data = await response.json();
                  return data.length === 0 || "Email already exists";
                },
              })}
            />
            <p className="text-red-600 text-left text-lg">
              {errors.email?.message}
            </p>
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              /*  value={data.password} */
              {...register("password", {
                required: { value: true, message: "password is required" },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long!",
                },
              })}
            />
            <p className="text-red-600 text-left text-lg">
              {errors.password?.message}
            </p>
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="passwordConfirm"
              placeholder="Confirm Password"
              /* value={data.passwordConfirm} */
              {...register("passwordConfirm", {
                required: {
                  value: true,
                  message: "Confirm Passwordis required",
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long!",
                },
                validate: (match) => {
                  const password = getValues("password");
                  return match === password || "Passwords should match!";
                },
              })}
            />
            <p className="text-red-600 text-left text-lg">
              {errors.passwordConfirm?.message}
            </p>
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
            {/*  <p className="text-black text-xl">{data}</p> */}
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </form>

          <div className="text-grey-dark mt-6 py-4">
            Already have an account?
            <Link
              className="no-underline border-b border-green-600 text-green-600"
              to="/LoginPage"
            >
              Log in.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
