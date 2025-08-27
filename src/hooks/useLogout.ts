// hooks/useLogout.ts
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { logoutUser } from "@/services/authService";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await logoutUser();             // Call API
      localStorage.removeItem("user"); // Clear local storage
      toast.success("Logged out successfully");
      navigate("/login");             // Redirect to login page
    } catch (error: any) {
      console.error(error);
      toast.error("Logout failed. Try again.");
    }
  };

  return logout;
};
