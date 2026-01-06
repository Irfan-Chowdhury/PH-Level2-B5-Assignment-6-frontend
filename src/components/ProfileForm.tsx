import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useGetProfileQuery, useUpdateProfileMutation, UserProfile} from "../redux/profileApi";
// import { useGetProfileQuery, useUpdateProfileMutation, UserProfile } from "@/redux/profileApi";

type ProfileFormProps = {
  title?: string;
};

const ProfileForm = ({ title = "Profile Management" }: ProfileFormProps) => {
  const { data: user, isLoading, isError } = useGetProfileQuery();

  const [updateProfile, { isLoading: updating }] = useUpdateProfileMutation();

  // const [formData, setFormData] = useState<Partial<UserProfile> & { password?: string; password_confirmation?: string }>({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   password: "",
  //   password_confirmation: "",
  // });

  const [formData, setFormData] = useState<Partial<UserProfile> & { password?: string; password_confirmation?: string }>(
    user ? { ...user, password: "", password_confirmation: "" } : { name: "", email: "", phone: "", address: "", password: "", password_confirmation: "" }
  );
  

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        password: "",
        password_confirmation: "",
      });      
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await updateProfile(formData).unwrap(); // unwrap gives proper error handling
      toast.success("Profile updated successfully!");
      setFormData((prev) => ({ ...prev, password: "", password_confirmation: "" }));
    } catch (err: any) {
      const errors = err?.data?.errors;
      if (errors) {
        Object.values(errors).forEach((fieldErrors: any) => {
          fieldErrors.forEach((message: string) => {
            toast.error(message);
          });
        });
      } else {
        toast.error(err?.data?.message || "Error");
      }
    }
  };

  if (isLoading) return <p>Loading profile...</p>;
  if (isError) return <p>Failed to load profile</p>;

  return (
    <motion.div className="p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="max-w-2xl mx-auto shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-blue-600">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
            </div>

            <div>
              <Label>Email</Label>
              <Input id="email" type="email" value={formData.email || ""} readOnly />
            </div>

            <div>
              <Label>Phone Number</Label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </div>

            <div>
              <Label>Address</Label>
              <Input id="address" name="address" type="text" value={formData.address} onChange={handleChange} />
            </div>

            <div>
              <Label>New Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password || ""}
                onChange={handleChange}
                placeholder="Leave blank if not changing"
              />
            </div>

            <div>
              <Label>Confirm Password</Label>
              <Input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                value={formData.password_confirmation || ""}
                onChange={handleChange}
                placeholder="Leave blank if not changing"
              />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleUpdate} disabled={updating}>
              {updating ? "Updating..." : "Update Profile"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileForm;
