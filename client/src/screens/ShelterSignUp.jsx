import React, { useRef, useState, useEffect, useContext } from "react";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { ReactComponent as ShelterSignUpSvg } from "./ShelterSignUp.svg";
import { Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/landing/Navbar";

const ShelterSignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg();
  }, [email, password]);

  return (
    <>
      {success ? (
        <section>
          <br />
          <p>
            <Navigate to="/Dashboard" />
          </p>
        </section>
      ) : (
        <>
          <Navbar className="bg-white" />
          <motion.div
            className="actions flex flex-col items-center min-h-screen py-2 font-default mt-20"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
              <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                <div className="w-3/5 p-5">
                  <div className="py-10">
                    <h2 className="text-2xl font-bold text-gray-700 mb-2">
                      Sign up as a Shelter
                    </h2>
                    <div className="border-2 w-10 border-gray-700 bg-gray-700 inline-block mb-2"></div>
                    {/*<p*/}
                    {/*  ref={errRef}*/}
                    {/*  className="text-green-800 text-sm mr-2 px-2.5 py-0.5 rounded font-bold"*/}
                    {/*  aria-live="assertive"*/}
                    {/*>*/}
                    {/*  we have received your application!*/}
                    {/*  our team will email you in 2-3 working days and contact you to set up an account with us :)*/}
                    {/*</p>*/}
                  </div>
                  <form>
                    {/* <form onSubmit={handleSubmit}> */}
                    <div className="flex flex-col items-center">
                      {/* email section */}
                      <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3">
                        <div className="bg-gray-100 w-64 p-2">
                          <HiMail className="text-grey-100 m-2" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          placeholder="enter your email"
                          className="bg-gray-100 outline-none text-m flex-1"
                          ref={userRef}
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                        />
                      </div>
                      {/* email section */}

                      <button
                        // href=""
                        className="signIn px-7 py-3 w-64 justify-center rounded-md border border-transparent text-sm focus:outline-none transition duration-300 bg-[#F7AF7A] hover:bg-[#FDEDE1] text-center marker:sm:w-auto font-bold text-gray-700 hover:text-[#F7AF7A] "
                      >
                        Sign Up
                      </button>
                      <Link
                        to="/ShelterLogin"
                        className="text-xs font-bold text-gray-700 hover:text-[#F7AF7A] transition duration-300 mt-6 hover:underline-offset-4"
                      >
                        Have an account? Sign in here
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="w-2/5 bg-[#FDEDE1]  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                  <ShelterSignUpSvg width="16rem" />
                </div>
              </div>
            </main>
          </motion.div>
        </>
      )}
    </>
  );
};



export default ShelterSignUp;

