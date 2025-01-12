"use client";

import React, { Suspense } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,

} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage, // Corrected import
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModeToggle } from "@/components/toggle-mode";
import { LoginSchema } from "@/schema";

type LoginFormType = z.infer<typeof LoginSchema>;

const SignupPage = () => {

  const form = useForm<LoginFormType>({
      resolver: zodResolver(LoginSchema),
      defaultValues: {
        email: "",
        password: "",
        name: "",
      },
    });
  
    const onSubmit = (data: LoginFormType) => {
      console.log("Form Submitted", data);
    };

  return (
    <Suspense>
      <div className="self-start mt-10 ml-10">
        <ModeToggle />
      </div>
      <main className="w-full h-screen flex justify-center items-center">
        <Card className="max-w-sm w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Sign in</CardTitle>
            <CardDescription>
              Please enter your email address to sign in
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...form.register("email")}
                      placeholder="Enter your email"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>

                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...form.register("password")}
                      type="password"
                      placeholder="Enter your password"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage>
                </FormItem>

                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...form.register("name")}
                      placeholder="Enter your name"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.name?.message}
                  </FormMessage>
                </FormItem>

                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </Suspense>
  )
}

export default SignupPage