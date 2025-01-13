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

const LoginPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newErrors = {
      email: user.email ? "" : "Email is required.",
      password: user.password ? "" : "Password is required.",
    };
    
    setErrors(newErrors);
    
    if (!Object.values(newErrors).some((error) => error)) {
      console.log("Form Submitted:", user);
      // API call or additional logic here
    }
  };
  
  const onLogin = async () => {
    console.log("Signup", user);
  }
  
  return (
    <>
      <div className="self-start mt-10 ml-10">
        <ModeToggle />
      </div>
      <main className="w-full h-screen flex justify-center items-center">
        <Card className="max-w-sm w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Sign in</CardTitle>
            <CardDescription>
              Please enter your details to sign in
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-6">
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
              <Button type="submit" className="w-full onClick={onLogin}">
                Sign Up
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default LoginPage;