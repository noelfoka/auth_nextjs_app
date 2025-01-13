"use client";

import React, {useState} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/toggle-mode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

const SignupPage = () => {
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const [errors, setErrors] = useState({ email: "", password: "", username: "" });

  const onSignup = async () => {
    console.log("Signup", user);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      email: user.email ? "" : "Email is required.",
      password: user.password ? "" : "Password is required.",
      username: user.username ? "" : "Username is required.",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      console.log("Form Submitted:", user);
      // API call or additional logic here
    }
  };

  return (
    <>
      <div className="self-start mt-10 ml-10">
        <ModeToggle />
      </div>
      <main className="w-full h-screen flex justify-center items-center">
        <Card className="max-w-sm w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Sign up</CardTitle>
            <CardDescription>
              Please enter your details to sign up.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <Input
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  placeholder="Enter your username"
                />
                {errors.username && <p className="text-red-500">{errors.username}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  placeholder="Enter your password"
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
              <Button type="submit" className="w-full onClick={onSignup}">
                Sign Up
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default SignupPage;