// hooks/useLogout.ts
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { logoutUser } from "../services/authService";
// import { logoutUser } from "@/services/authService";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {    
    try {
      const response = await logoutUser();   
      // return console.log(response);       // Call API
      
      localStorage.removeItem("dw_token"); // Clear local storage
      localStorage.removeItem("dw_user"); // Clear local storage

      toast.success(response.message || "Logged out successfully");

      navigate("/login");             // Redirect to login page
    } catch (error: any) {
      console.error(error);
      toast.error("Logout failed. Try again.");
    }
  };

  return logout;
};
