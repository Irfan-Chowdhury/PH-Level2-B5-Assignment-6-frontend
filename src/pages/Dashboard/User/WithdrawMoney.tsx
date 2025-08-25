import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const WithdrawMoney = () => {
  const [formData, setFormData] = useState({
    agentNumber: "",
    amount: "",
    pin: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setMessage(
        `✅ Successfully withdrawn ৳${formData.amount} via Agent ${formData.agentNumber}`
      );
      setFormData({ agentNumber: "", amount: "", pin: "" });
    }, 1500);
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="max-w-lg mx-auto shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-red-600">
            Withdraw Money
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Agent Number */}
            <div>
              <Label htmlFor="agentNumber" className="my-2">Agent Number</Label>
              <Input
                id="agentNumber"
                name="agentNumber"
                type="text"
                placeholder="Enter agent number"
                value={formData.agentNumber}
                onChange={handleChange}
                required
              />
            </div>

            {/* Amount */}
            <div>
              <Label htmlFor="amount" className="my-2">Amount</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Enter withdrawal amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>

            {/* PIN */}
            <div>
              <Label htmlFor="pin" className="my-2">Wallet PIN</Label>
              <Input
                id="pin"
                name="pin"
                type="password"
                placeholder="Enter wallet PIN"
                value={formData.pin}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full" disabled={loading} variant="destructive">
              {loading ? "Processing..." : "Withdraw"}
            </Button>
          </form>

          {/* Success Message */}
          {message && (
            <motion.p
              className="mt-4 text-center text-green-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {message}
            </motion.p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WithdrawMoney;
