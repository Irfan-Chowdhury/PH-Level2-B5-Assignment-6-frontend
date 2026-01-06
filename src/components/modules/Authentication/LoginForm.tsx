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
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

import { loginUser } from "@/services/authService";

interface LoginFormData {
  email: string;
  password: string;
}

const demoCreds = {
  ADMIN: { email: "admin123@gmail.com", password: "admin123" },
  USER: { email: "user123@gmail.com", password: "user123" },
  AGENT: { email: "agent123@gmail.com", password: "agent123" },
} as const;

type DemoRole = keyof typeof demoCreds;

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();

  const form = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await loginUser(data);

      toast.success("Logged in successfully");
      form.reset();

      if (response.data) {
        localStorage.setItem("dw_token", response.data.token);
        localStorage.setItem("dw_user", JSON.stringify(response.data.user));

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
            navigate("/");
        }
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message || "Invalid credentials");
    }
  };

  const fillDemo = (role: DemoRole) => {
    const creds = demoCreds[role];
    form.setValue("email", creds.email, { shouldValidate: true });
    form.setValue("password", creds.password, { shouldValidate: true });
    toast.message(`Filled ${role.toLowerCase()} credentials`);
  };

  return (
    <div
      className={cn(
        "w-full max-w-md rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm backdrop-blur",
        className
      )}
      {...props}
    >
      {/* Title (similar feel, but original) */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-indigo-700">
          DigiWallet
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Login with your email and password
        </p>
      </div>

      {/* Quick login buttons */}
      <div className="mt-6">
        <div className="grid grid-cols-3 gap-2">
          <Button
            type="button"
            onClick={() => fillDemo("ADMIN")}
            className="rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            Admin
          </Button>

          <Button
            type="button"
            onClick={() => fillDemo("USER")}
            className="rounded-xl bg-sky-500 hover:bg-sky-600 text-white"
          >
            User
          </Button>

          <Button
            type="button"
            onClick={() => fillDemo("AGENT")}
            className="rounded-xl bg-amber-400 hover:bg-amber-500 text-gray-900"
          >
            Agent
          </Button>
        </div>

        <p className="mt-2 text-center text-xs text-gray-500">
          Tap a role to auto-fill demo credentials.
        </p>
      </div>

      {/* Form */}
      <div className="mt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-indigo-500">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      {...field}
                      value={field.value || ""}
                      className="rounded-xl bg-indigo-50/60 border-indigo-100 focus-visible:ring-indigo-300"
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
                  <FormLabel className="text-sm text-indigo-500">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      value={field.value || ""}
                      className="rounded-xl bg-indigo-50/60 border-indigo-100 focus-visible:ring-indigo-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>

        <div className="mt-5 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to="/register" replace className="font-semibold text-indigo-700 underline underline-offset-4">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
