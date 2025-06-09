import React from "react";
import registerAnimation from "../assets/Animation - 1749405532540.json";
import Lottie from "lottie-react";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, photoURL, email, password } = Object.fromEntries(
      formData.entries()
    );
    console.log(name, photoURL, email, password);
  };
  return (
    <div className="my-20">
      <Helmet>
        <title>TraVoa | Register</title>
      </Helmet>
      <div className="w-full shrink-0 md:flex items-center md:gap-10 justify-center">
        <Lottie
          className="md:w-90 md:mx-0 w-50 mx-auto"
          animationData={registerAnimation}
        ></Lottie>
        <div className="space-y-5 w-90">
          <h1 className="md:text-4xl text-xl font-bold">Please Register</h1>
          {/* register form */}
          <form onSubmit={handleRegister} className="space-y-5">
            {/* name */}
            <label className="w-full input validator border-0 border-b-2 rounded-none">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                name="name"
                type="text"
                required
                placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength="3"
                maxLength="30"
                title="Only letters, numbers or dash"
              />
            </label>
            {/* photo url */}
            <label className="w-full input validator border-0 border-b-2 rounded-none">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </g>
              </svg>
              <input name="photoURL" type="url" placeholder="photo URL" />
            </label>
            {/* email */}
            <label className="w-full input validator border-0 border-b-2 rounded-none">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                name="email"
                type="email"
                placeholder="mail@site.com"
                required
              />
            </label>
            {/* password */}
            <label className="w-full input validator border-0 border-b-2 rounded-none">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                name="password"
                type="password"
                required
                placeholder="Password"
              />
            </label>
            <button className="btn btn-primary mt-4">Register</button>
          </form>
        </div>
      </div>
      {/* create and social login */}
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-30 py-10 md:py-0 space-y-5 md:space-y-0">
        <div>
          <p>
            Already have a account?{" "}
            <Link to={"/login"} className="underline">
              Login
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl">or continue with</h1>
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
