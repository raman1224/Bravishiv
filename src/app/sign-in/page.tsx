"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = async () => {

    try {
        const res = await signInWithEmailAndPassword(email, password)
      router.push("/");
      sessionStorage.setItem('user', 'true');
      console.log(res)
      setEmail("")
      setPassword("")
      router.push("/")
    } catch (err) {
        console.log(err)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 p-6">
      <div

        className="w-full max-w-md backdrop-blur-xl bg-white/20 border border-white/30 p-8 rounded-3xl shadow-2xl"
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Floating Email Input */}
          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer w-full px-4 py-3 bg-white/10 text-white rounded-xl 
                outline-none border border-white/30 focus:border-blue-300 
                placeholder-transparent transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-300 pointer-events-none 
                transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-200"
            >
              Email
            </label>
          </div>

          {/* Floating Password Input */}
          <div className="relative">
            <input
              type="password"
              id="password"
              className="peer w-full px-4 py-3 bg-white/10 text-white rounded-xl 
                outline-none border border-white/30 focus:border-blue-300 
                placeholder-transparent transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-3 text-gray-300 pointer-events-none 
                transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-200"
            >
              Password
            </label>
          </div>

          {/* {error && (
            <p className="text-red-300 text-sm font-medium text-center">
              {error}
            </p>
          )} */}

          <button

className="w-full py-3 bg-white text-indigo-700 font-semibold 
              rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
