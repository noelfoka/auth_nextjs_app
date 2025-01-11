"use client";

import React, { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormErrorMessage,
  FormDescription,
  FormField,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  return (
    <Suspense>
      <main className="w-full h-full flex justify-center items-center"></main>
    </Suspense>
  );
};

export default LoginPage;