
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../Context/Authprovider";
import { Link } from "react-router-dom";

export default function Signup() {
  const [authuser,setAuthUser] =useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassaord", "");
  const validatepasswordMatch = (value) => {
    return value === password || "Password and Confirm Password Don't Match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    // console.log(userInfo);
    await axios
    .post("/api/user/signup", userInfo)
      .then((response) => {
        console.log(response.data);
        if(response.data)
        {
            alert("Signup Sucessfully! You can login now");

        }
        localStorage.setItem("messenger",JSON.stringify(response.data));
        setAuthUser(response.data);
      }).catch((error)=>{
        if(error.response)
        {
           alert("Error"+error.response.data.error);
        }
      })
  };
  return (
    <div className=" h-screen w-[100%] bg-amar-white  absolute ">
      <div className=" mx-auto my-[40px] bg-amar2-white rounded-xl h-[600px] w-[40%] shadow-2xl  relative  ">
        <div className="h-[150px] bg-nebublu  rounded-xl flex items-center flex-col justify-normal ">
          <div className="">
            <img
              className="w-[100px] "
              src="https://mailmeteor.com/logos/assets/PNG/Google_Chat_Logo_512px.png"
              alt=""
            />
          </div>
          <h1 className=" bottom-5 text-4xl font-bold ">Green Chats</h1>
        </div>
        <div></div>

        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="input input-bordered flex items-center gap-2 w-[400px] mx-auto my-[20px] shadow-lg ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox=" 0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70  text-black dark:text-white "
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow text-black dark:text-white"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </label>
            <label className="input input-bordered flex items-center gap-2 w-[400px] mx-auto my-[20px] shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-black dark:text-white"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow text-black dark:text-white"
                placeholder="Username"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </label>
            <label className="input input-bordered flex items-center gap-2 w-[400px] mx-auto my-[20px] shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-black dark:text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow text-black dark:text-white"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}
            </label>
            <label className="input input-bordered flex items-center gap-2 w-[400px] mx-auto my-[20px] shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-black dark:text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow text-black dark:text-white"
                placeholder="Confrim Password"
                {...register("confirmPassword", {
                  required: true,
                  validate: validatepasswordMatch,
                })}
              />
              {errors.confirmPassword && (
                <span className="text-red-600">Passowrd don't Match</span>
              )}
            </label>

            <label>
              <input
                type="Submit"
                className="grow mx-[55px] btn btn-success w-[400px] h-11 my-[20px] shadow-lg font-bold text-lg"
                value="SIGN UP"
              />
            </label>

            <span className="text-nebublu mx-[60px]">
              If you have alredy an Account?{" "}
              <Link to={"/login"} className=" link link-success text-md font-bold" href="#">
                {" "}
                LOGIN{" "}
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
