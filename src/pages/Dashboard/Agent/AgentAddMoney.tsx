import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";

const AgentAddMoney = () => {
  const [form, setForm] = useState({
    userIdentifier: "",
    amount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.userIdentifier || !form.amount) {
      toast.error("Please fill all fields.");
      return;
    }

    if (Number(form.amount) <= 0) {
      toast.error("Amount must be greater than zero.");
      return;
    }

    // Simulate success
    toast.success(
      `Successfully added ৳${form.amount} to ${form.userIdentifier}'s wallet`
    );

    setForm({ userIdentifier: "", amount: "" });
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="max-w-lg mx-auto rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">
            Add Money to User’s Wallet
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="userIdentifier">User Phone</Label>
              <Input
                id="userIdentifier"
                name="userIdentifier"
                placeholder="Enter phone number"
                value={form.userIdentifier}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="amount">Amount (৳)</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Enter amount"
                value={form.amount}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full">
              Add Money
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AgentAddMoney;
