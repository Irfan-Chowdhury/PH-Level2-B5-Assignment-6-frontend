import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

type Transaction = {
  id: number;
  type: "Deposit" | "Withdraw" | "Send" | "Receive";
  amount: number;
  date: string;
  recipient?: string;
};

const mockTransactions: Transaction[] = [
  { id: 1, type: "Deposit", amount: 2000, date: "2025-08-01" },
  { id: 2, type: "Send", amount: 500, date: "2025-08-02", recipient: "018XXXXXXXX" },
  { id: 3, type: "Withdraw", amount: 1000, date: "2025-08-03" },
  { id: 4, type: "Receive", amount: 700, date: "2025-08-05", recipient: "019XXXXXXXX" },
  { id: 5, type: "Deposit", amount: 1500, date: "2025-08-06" },
  { id: 6, type: "Send", amount: 800, date: "2025-08-08", recipient: "017XXXXXXXX" },
];

const TransactionHistory = () => {
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const pageSize = 3;

  // Filtering
  const filtered = mockTransactions.filter((t) => {
    const matchesType = typeFilter === "All" || t.type === typeFilter;
    const matchesDate =
      (!startDate || new Date(t.date) >= new Date(startDate)) &&
      (!endDate || new Date(t.date) <= new Date(endDate));
    return matchesType && matchesDate;
  });

  // Pagination
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="max-w-4xl mx-auto shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-blue-600">
            Transaction History
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <Label>Type</Label>
              <Select onValueChange={(val) => setTypeFilter(val)} defaultValue="All">
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Deposit">Deposit</SelectItem>
                  <SelectItem value="Withdraw">Withdraw</SelectItem>
                  <SelectItem value="Send">Send</SelectItem>
                  <SelectItem value="Receive">Receive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>From</Label>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <Label>To</Label>
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3">ID</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Recipient</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length > 0 ? (
                  paginated.map((t) => (
                    <tr key={t.id} className="border-b">
                      <td className="p-3">{t.id}</td>
                      <td className="p-3">{t.type}</td>
                      <td className="p-3">৳{t.amount}</td>
                      <td className="p-3">{t.date}</td>
                      <td className="p-3">{t.recipient || "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-gray-500">
                      No transactions found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="outline"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Prev
            </Button>
            <span>
              Page {page} of {totalPages || 1}
            </span>
            <Button
              variant="outline"
              disabled={page === totalPages || totalPages === 0}
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TransactionHistory;
