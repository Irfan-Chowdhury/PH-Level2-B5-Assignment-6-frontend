import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useCashInMutation } from "../../../redux/walletApi";

type WalletCashIn = {
  receiver_phone: string;
  amount: number;
  pin: string;
};


const AgentCashIn = () => {
  const [formData, setFormData] = useState<WalletCashIn>({
    receiver_phone: "",
    amount: "",
    pin: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const [cashIn, { isLoading }] = useCashInMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
      // [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await cashIn(formData).unwrap(); // unwrap => clean data or throw error
      console.log("API call successful:", response);

      toast.success(response.message || "Cash In successfully");

      setFormData({ receiver_phone: "", amount: 0, pin: "" });
    } catch (error: any) {
      const errors = error.data?.errors;
      if (errors) {
        Object.values(errors).forEach((fieldErrors: any) => {
          fieldErrors.forEach((msg: string) => toast.error(msg));
        });
      } else {
        toast.error(error.data?.message || "Error");
      }
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
          <CardTitle className="text-center text-2xl font-bold text-blue-600">
            Cash In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Recipient */}
            <div>
              <Label htmlFor="recipient" className="my-2">User Phone</Label>
              <Input
                id="recipient"
                name="receiver_phone"
                type="text"
                placeholder="Enter phone"
                value={formData.receiver_phone}
                onChange={handleChange}
                
              />
            </div>

            {/* Amount */}
            <div>
              <Label htmlFor="amount" className="my-2">Amount</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Enter amount to send"
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

       
            {/* <Button type="submit" className="w-full">
              Cash In
            </Button> */}
            <button
              onClick={handleChange}
              disabled={isLoading}
              className="bg-indigo-600 text-white px-4 py-2 rounded"
              >
              {isLoading ? "Processing..." : "Cash In"}
            </button>
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

export default AgentCashIn;
