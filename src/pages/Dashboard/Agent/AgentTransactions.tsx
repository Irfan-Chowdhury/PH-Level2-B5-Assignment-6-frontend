import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import rootApi from "../../../redux/rootAPI";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";


type Transaction = {
  id: number;
  type: "cash-in" | "cash-out";
  amount: number;
  createdAt: string;
  user?: string | { phone: string }; // union type
};


// Mock Data (replace with API later)
const mockTransactions = [
  { id: 1, type: "cash-in", amount: 5000, user: "017XXXXXXXX", createdAt: "2025-08-10" },
  { id: 2, type: "cash-out", amount: 2000, user: "018XXXXXXXX", createdAt: "2025-08-11" },
  { id: 3, type: "cash-in", amount: 1000, user: "019XXXXXXXX", createdAt: "2025-08-12" },
  { id: 4, type: "cash-out", amount: 1500, user: "017XXXXXXXX", createdAt: "2025-08-14" },
  { id: 5, type: "cash-in", amount: 3000, user: "018XXXXXXXX", createdAt: "2025-08-15" },
];


const AgentTransactions = () => {
  const [users, setUsers] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  // const [transactions] = useState(mockTransactions);
  // const [typeFilter, setTypeFilter] = useState<string>("all");
  // const [dateFilter, setDateFilter] = useState<string>("");

  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  
  // Pagination
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;


  // 🔹 Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("dw_token");

      try {
        const response = await rootApi.get("/transaction/my-transactions",
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUsers(response.data.data);

      } catch (error: any) {
        console.log("Error:", error);

        if (error.response?.status === 403) {
          toast.error("You don't have permission to access this resource");
        } else if (error.response?.status === 401) {
          toast.error("Unauthorized, please log in again");
        } else {
          toast.error("Failed to load users");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
    

  // Filtering
  const filtered = users.filter((t) => {
    const matchesType = typeFilter === "All" || t.type === typeFilter;
    const matchesDate =
      (!startDate || new Date(t.createdAt) >= new Date(startDate)) &&
      (!endDate || new Date(t.createdAt) <= new Date(endDate));
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

          {/* Transactions Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount (৳)</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <tbody>
                {paginated.length > 0 ? (
                  paginated.map((t) => (
                    <tr key={t.id} className="border-b">
                      <td className="p-3">{t.id}</td>
                      <td className="p-3">{t.type}</td>
                      <td className="p-3">৳{t.amount}</td>
                      {/* <td className="p-3">{t.recipient || "-"}</td> */}
                      <td className="p-3">
                        {typeof t.recipient === "object"
                          ? t.recipient?.phone || "-"
                          : t.recipient || "-"}
                      </td>
                      <td className="p-3">{t.createdAt}</td>
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
