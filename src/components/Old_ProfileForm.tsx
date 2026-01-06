// src/components/ProfileForm.tsx
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import rootApi from "@/redux/rootAPI";
import { toast } from "sonner";

type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  role: string;
  address: string;
};

type ProfileFormProps = {
  title?: string; // allow dynamic title, e.g. "Admin Profile" or "User Profile"
};

const ProfileForm = ({ title = "Profile Management" }: ProfileFormProps) => {
  const [user, setUser] = useState<User | null>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  // 🔹 Fetch profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("dw_token");

      try {
        const response = await rootApi.get("/user/profile", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.data);
        setName(response.data.data.name);
        setPhone(response.data.data.phone);
        setEmail(response.data.data.email);
        setAddress(response.data.data.address);
      } catch (error: any) {
        console.error("Error:", error);

        if (error.response?.status === 403) {
          toast.error("You don't have permission to access this resource");
        } else if (error.response?.status === 401) {
          toast.error("Unauthorized, please log in again");
        } else {
          toast.error("Failed to load profile");
        }
      }
    };

    fetchUserProfile();
  }, []);

  // 🔹 Update profile
  const handleUpdate = async () => {
    const token = localStorage.getItem("dw_token");

    try {
      await rootApi.put(
        "/user/profile",
        {
          name,
          phone,
          address,
          password: password || undefined, // only send if filled
          password_confirmation: password_confirmation || undefined,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      setSuccessMessage("Profile updated successfully!");
      toast.success("Profile updated successfully!");
      setPassword("");
      setPasswordConfirmation("");
    } catch (error: any) {
      console.error("Error updating profile:", error);

      if (error.response?.status === 400) {
        toast.error("Invalid data, please check your inputs");
      } else if (error.response?.status === 401) {
        toast.error("Unauthorized, please login again");
      } else {
        toast.error("Failed to update profile");
      }
    }
  };
  

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="max-w-2xl mx-auto shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-blue-600">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <Label>Email</Label>
              <Input id="email" type="email" value={email} readOnly />
            </div>

            <div>
              <Label>Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <Label>Address</Label>
              <Input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <Label>New Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Leave blank if not changing"
              />
            </div>

            <div>
              <Label>Confirm Password</Label>
              <Input
                id="password_confirmation"
                type="password"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                placeholder="Leave blank if not changing"
              />
            </div>

            {successMessage && (
              <p className="text-green-600 font-medium">{successMessage}</p>
            )}

            <Button
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={handleUpdate}
            >
              Update Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileForm;
