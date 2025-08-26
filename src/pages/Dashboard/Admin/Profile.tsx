import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const AdminProfile = () => {
  const [name, setName] = useState("Md Irfan Chowdhury");
  const [phone, setPhone] = useState("018XXXXXXXX");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleUpdate = () => {
    // ⚡ Later: send to backend API
    setSuccessMessage("Profile updated successfully!");
    setPassword(""); // clear password field
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
            Profile Management
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
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

export default AdminProfile;
