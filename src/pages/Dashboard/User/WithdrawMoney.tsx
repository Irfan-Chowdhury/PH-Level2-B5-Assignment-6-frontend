import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { withdrawBalance } from "../../../services/walleteService";


type WalletWithdraw = {
  to: string;
  amount: number;
  pin: string;
};


const WithdrawMoney = () => {


  const [formData, setFormData] = useState<WalletWithdraw>({
    to: "",
    amount: 0,
    pin: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value, type } = e.target;
  
    setFormData(prev => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
  
    const formInfo = {
      to: formData.to,
      amount: formData.amount,
      pin: formData.pin,
    };
  
    try {
      const response = await withdrawBalance(formInfo);
      console.log("API call successful, response data:", response);
  
      toast.success("Money deposited successfully");
  
      setFormData({ to: "", amount: 0, pin: "" });
    } catch (error: any) {
      const errors = error.response?.data?.errors;
      if (errors) {
        Object.values(errors).forEach((fieldErrors: any) => {
          fieldErrors.forEach((message: string) => {
            toast.error(message);
          });
        });
      } else {
        toast.error(error.response?.data?.message || "Error");
      }
    } finally {
      setLoading(false);
    }
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
              <Label htmlFor="agentNumber" className="my-2">Send To</Label>
              <Input
                id="to"
                name="to"
                type="text"
                placeholder="e.g : Bank, ATM etc."
                value={formData.to}
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
