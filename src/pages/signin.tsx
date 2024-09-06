"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@/components/common/Logo";
import { LeftArrow } from "./../svg";
import Link from "next/link";
import axios from "axios";
import { decryptData, encryptData } from "../helper/encryptDecrypt";
import { useUser } from "../context/userContext";
import api from "../api";
const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const { setUser } = useUser();
  const handleChange = (e:any) => {
    const { name, value } = e.target;

    setValues((previousValues) => {
      return {
        ...previousValues,
        [name]: value,
      };
    });
  };
  const handleLogin = async (e:any) => {
    e.preventDefault();
    console.log("clicked");
    // await axios
    //   .post(`${apiUrl}/auth/login`, values)
    //   .then(async (res) => {
    //     localStorage.setItem(
    //       "linkfluencer-remember-me",
    //       JSON.stringify(rememberMe)
    //     );
    //     console.log(res.data.user._id);
    //     if (rememberMe) {
    //       const userData = encryptData({
    //         token: res.data.token,
    //         email: values.email,
    //         password: values.password,
    //         userId: res.data.user._id,
    //       });
    //       setUser({
    //         token: res.data.token,
    //         email: values.email,
    //         password: values.password,
    //         userId: res.data.user._id,
    //       });
    //       localStorage.setItem("linkfluencer-data", userData);
    //       alert("done");
    //     }
    //     router.push("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const response = await api.post("/auth/login", values);

    console.log({ response });
  };
  useEffect(() => {
    setIsFormValid(values.email !== "" && values.password !== "");
  }, [values.email, values.password]);
  useEffect(() => {
    console.log(localStorage.getItem("linkfluencer-remember-me"));
    const rememberMeData = JSON.parse(
      localStorage.getItem("linkfluencer-remember-me")
    );
    console.log(typeof rememberMeData);
    if (rememberMeData) {
      setRememberMe(rememberMeData);
      const data = decryptData(localStorage.getItem("linkfluencer-data"));
      console.log({ data });
      setValues({
        ...values,
        email: data.email,
        password: data.password,
      });
    } else {
      setValues({
        ...values,
        email: "",
        password: "",
      });
    }
  }, []);
  return (
    <div>
      <Logo />
      <div className=" bg-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-4 md:p-8 bg-white rounded-lg relative">
          <div className="flex items-center md:space-x-4 mb-4 relative md:right-4">
            <Link href={"/"}>
              <button className="text-lg relative bottom-3 hidden md:flex">
                <LeftArrow
                  className={
                    " size-10 border p-2 rounded-full border-[#113E53] absolute right-0 bottom-0 bg-[#59FF93] hover:rotate-45 duration-150"
                  }
                />
              </button>
            </Link>
            <div>
              <h1 className="text-4xl font-semibold text-navy">Log In</h1>
              <p className="text-xl mt-2 text-gray-600">
                Welcome back! Log in to access your account.
              </p>
            </div>
          </div>

          <form className="space-y-4" autoComplete="off">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={values.email}
              onChange={handleChange}
              name="email"
              className="p-3 rounded-full border border-gray-500 w-full focus:outline-none focus:ring-2"
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              value={values.password}
              onChange={handleChange}
              name="password"
              className="p-3 rounded-full border border-gray-500 w-full focus:outline-none focus:ring-2"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  className="mr-2 scale-150"
                  checked={rememberMe}
                  onChange={() => {
                    setRememberMe(!rememberMe);
                  }}
                />
                Remember Me
              </label>
              <a
                onClick={() => router.push("/forgetPassword")}
                className="text-navy hover:underline cursor-pointer text-[16px] font-[400] underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="button"
              // disabled={!isFormValid}
              className={`w-full p-3 rounded-full focus:outline-none ${
                isFormValid
                  ? "bg-[#020D3A] text-white"
                  : " bg-slate-500 text-white "
              } cursor-pointer`}
              onClick={handleLogin}
            >
              Log In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a
              onClick={() => router.push("/signup")}
              className="text-navy cursor-pointer font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center mt-[32px] gap-4">
            <button className=" flex w-full gap-2 justify-center xs:mb-0 py-3 px-8 bg-white border border-[#113E53] rounded-full shadow-sm hover:shadow-md">
              <Image
                src="/images/google_logo.png"
                alt="Google"
                width={20}
                height={20}
              />
              <span className="font-bold">Google</span>
            </button>
            <button className=" flex w-full justify-center gap-2 p-3 px-8 bg-white border border-[#113E53] rounded-full shadow-sm hover:shadow-md">
              <Image
                src="/images/facebook_logo.png"
                alt="Facebook"
                width={20}
                height={20}
              />
              <span className="font-bold">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
