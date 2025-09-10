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
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

import { loginUser } from "@/services/authService";

interface LoginFormData {
  email: string;
  password: string;
}

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  // ✅ Type the form with LoginFormData
  const form = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // ✅ Type onSubmit properly
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await loginUser(data); // ✅ data now matches the expected type

      toast.success("Logged in successfully");
      form.reset();

      // Save token and user info
      if (response.data) {
        localStorage.setItem("dw_token", response.data.token);
        localStorage.setItem("dw_user", JSON.stringify(response.data.user));

        // Navigate based on role
        switch (response.data.user.role) {
          case "ADMIN":
            navigate("/admin");
            break;
          case "USER":
            navigate("/user");
            break;
          case "AGENT":
            navigate("/agent");
            break;
          default:
            navigate("/"); // fallback
        }
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message || "Invalid credentials");
    }
  };

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
