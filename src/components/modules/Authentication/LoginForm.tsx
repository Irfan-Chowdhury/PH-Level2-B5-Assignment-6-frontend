import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { loginUser } from "@/services/authService";
import config from "../../../config";


export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {      
      const response = await loginUser(data);

      console.log(response);

      toast.success("Logged in successfully");

      form.reset();

      // ✅ Save user info or token if backend returns it
      if (response.data) {
        // localStorage.setItem("dw_token", JSON.stringify(response.data.token));
        localStorage.setItem("dw_token", response.data.token);
        localStorage.setItem("dw_user", JSON.stringify(response.data.user));

        if (response.data.user.role == 'ADMIN') {
          navigate("/admin");
        }
        if (response.data.user.role == 'USER') {
          navigate("/user");
        }
        if (response.data.user.role == 'AGENT') {
          navigate("/agent");
        }
      }

      

      // navigate("/");


    } catch (error: any) {
      console.log(error);
      // console.log(error.response.status);
      toast.error(error.response?.data?.message || "Invalid credentials");
    }
  };

  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //   try {
  //     const res = await login(data).unwrap();

  //     if (res?.success) {
  //       // ✅ Show toast
  //       toast.success("Logged in successfully");

  //       // ✅ Store token / user data if backend sends
  //       if (res.token) {
  //         localStorage.setItem("accessToken", res.token);
  //       }
  //       if (res.user) {
  //         localStorage.setItem("user", JSON.stringify(res.user));
  //       }

  //       // ✅ Reset form after success
  //       form.reset();

  //       // ✅ Redirect
  //       navigate("/");
  //     }
  //   } catch (err) {
  //     console.error("Login error:", err);

  //     const error = err as FetchBaseQueryError & {
  //       data?: { message?: string };
  //     };

  //     // More flexible error handling
  //     const errorMessage =
  //       error.data?.message ||
  //       "Login failed. Please check your credentials and try again.";

  //     toast.error(errorMessage);

  //     if (errorMessage === "User is not verified") {
  //       navigate("/verify", { state: data.email });
  //     }
  //   }
  // };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>

      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading} // disable button when loading
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>
      </div>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" replace className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  );
}
