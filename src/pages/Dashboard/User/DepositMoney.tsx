import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Form } from "@/components/ui/form";
import { depositMoney } from "../../../services/walleteService";
import { toast } from "sonner";
import { number } from "zod";

type Wallet = {
  from: string;
  amount: number;
  pin: string;
};


const DepositMoney = () => {

const [formData, setFormData] = useState<Wallet>({
  from: "",
  amount: 0,
  pin: "",
});

const [loading, setLoading] = useState(false);

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
    from: formData.from,
    amount: formData.amount,
    pin: formData.pin,
  };

  try {
    const response = await depositMoney(formInfo);
    console.log("API call successful, response data:", response);

    toast.success("Money deposited successfully");

    // reset form state
    setFormData({ from: "", amount: 0, pin: "" });
  } catch (error: any) {
    const errors = error.response?.data?.errors;
    if (errors) {
      // Loop through each field's error array and display all messages
      Object.values(errors).forEach((fieldErrors: any) => {
        fieldErrors.forEach((message: string) => {
          toast.error(message);
        });
      });
    } else {
      toast.error(error.response?.data?.message || "Registration failed");
    }

    // console.error(error.response?.data?.errors);
    // toast.error(error.response?.data?.errors || "Registration failed");
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
          <CardTitle className="text-center text-2xl font-bold text-indigo-600">
            Deposit Money
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Agent Number */}
            <div>
              <Label htmlFor="sourceFrom">Source From</Label>
              <Input
                id="from"
                name="from"
                type="text"
                placeholder="e.g : External Source, Bank or Others"
                value={formData.from}
                required
                onChange={handleChange}
              />
            </div>

            {/* Amount */}
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Enter deposit amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>

            {/* PIN */}
            <div>
              <Label htmlFor="pin">Wallet PIN</Label>
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
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Processing..." : "Deposit"}
            </Button>
          </form>

          {/* Success Message */}
          {/* {message && (
            <motion.p
              className="mt-4 text-center text-green-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {message}
            </motion.p>
          )} */}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DepositMoney;
