import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

// Mock Data (replace with API later)
const mockTransactions = [
  { id: 1, type: "cash-in", amount: 5000, user: "017XXXXXXXX", date: "2025-08-10" },
  { id: 2, type: "cash-out", amount: 2000, user: "018XXXXXXXX", date: "2025-08-11" },
  { id: 3, type: "cash-in", amount: 1000, user: "019XXXXXXXX", date: "2025-08-12" },
  { id: 4, type: "cash-out", amount: 1500, user: "017XXXXXXXX", date: "2025-08-14" },
  { id: 5, type: "cash-in", amount: 3000, user: "018XXXXXXXX", date: "2025-08-15" },
];

const AgentTransactions = () => {
  const [transactions] = useState(mockTransactions);
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("");

  // Pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const filtered = transactions.filter((tx) => {
    const matchesType = typeFilter === "all" || tx.type === typeFilter;
    const matchesDate = !dateFilter || tx.date === dateFilter;
    return matchesType && matchesDate;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">
            Agent Transaction History
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <Select onValueChange={(val) => setTypeFilter(val)} defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="cash-in">Cash-In</SelectItem>
                <SelectItem value="cash-out">Cash-Out</SelectItem>
              </SelectContent>
            </Select>

            <Input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-[200px]"
            />
          </div>

          {/* Transactions Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount (৳)</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.length > 0 ? (
                paginated.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell>{tx.id}</TableCell>
                    <TableCell className={tx.type === "cash-in" ? "text-green-600" : "text-red-600"}>
                      {tx.type.toUpperCase()}
                    </TableCell>
                    <TableCell>৳{tx.amount}</TableCell>
                    <TableCell>{tx.user}</TableCell>
                    <TableCell>{tx.date}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-gray-500">
                    No transactions found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <Button
              variant="outline"
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            <span>
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AgentTransactions;
