import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { toast } from "sonner";
import rootApi from "../../../redux/rootAPI";


type Transaction = {
  id: number;
  type: "cash-in" | "cash-out";
  amount: number;
  createdAt: string;
  status: string;
  recipient?: string | { phone: string }; // union type
};



// Mock transactions
const mockTransactions = [
  { id: 1, type: "cash-in", status: "success", amount: 5000, user: "017XXXXXXXX", date: "2025-08-10" },
  { id: 2, type: "cash-out", status: "pending", amount: 2000, user: "018XXXXXXXX", date: "2025-08-11" },
  { id: 3, type: "cash-in", status: "success", amount: 1000, user: "019XXXXXXXX", date: "2025-08-12" },
  { id: 4, type: "cash-out", status: "failed", amount: 1500, user: "017XXXXXXXX", date: "2025-08-14" },
  { id: 5, type: "cash-in", status: "success", amount: 3000, user: "018XXXXXXXX", date: "2025-08-15" },
];

const AdminTransactions = () => {
  const [users, setUsers] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [page, setPage] = useState<number>(1);



  // const [transactions] = useState(mockTransactions);
  const [transactions] = useState(users);

  // const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [minAmount, setMinAmount] = useState<string>("");
  const [maxAmount, setMaxAmount] = useState<string>("");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  // Pagination
  // const [page, setPage] = useState(1);
  const itemsPerPage = 10;


    // 🔹 Fetch users from API
    useEffect(() => {
      const fetchUsers = async () => {
        const token = localStorage.getItem("dw_token");
  
        try {
          const response = await rootApi.get("/admin/transactions",
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // return console.log(response);
  
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


  const filtered = transactions.filter((tx) => {
    const matchesType = typeFilter === "all" || tx.type === typeFilter;
    const matchesStatus = statusFilter === "all" || tx.status === statusFilter;
    const matchesSearch = !search || tx.user.includes(search);
    const matchesMin = !minAmount || tx.amount >= Number(minAmount);
    const matchesMax = !maxAmount || tx.amount <= Number(maxAmount);
    const matchesFromDate = !fromDate || tx.date >= fromDate;
    const matchesToDate = !toDate || tx.date <= toDate;

    return matchesType && matchesStatus && matchesSearch && matchesMin && matchesMax && matchesFromDate && matchesToDate;
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
          <CardTitle className="text-xl font-semibold text-center">All Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            <Select onValueChange={setTypeFilter} defaultValue="all">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="cash-in">Cash-In</SelectItem>
                <SelectItem value="cash-out">Cash-Out</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setStatusFilter} defaultValue="all">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="Search by user phone/email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Min Amount"
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Max Amount"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
              />
            </div>

            <div className="flex gap-2 col-span-full lg:col-span-2">
              <Input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <Input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>

          {/* Transactions Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
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
                    <TableCell
                      className={
                        tx.status === "success"
                          ? "text-green-600"
                          : tx.status === "pending"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }
                    >
                      {tx.status.toUpperCase()}
                    </TableCell>
                    <TableCell>৳{tx.amount}</TableCell>
                    <TableCell>{tx.user}</TableCell>
                    <TableCell>{tx.date}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-gray-500">
                    No transactions found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
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

export default AdminTransactions;
