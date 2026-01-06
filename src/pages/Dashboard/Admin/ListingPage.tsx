import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { motion } from "framer-motion";
import rootApi from "../../../redux/rootAPI";
import { toast } from "sonner";

// Example dataset (can be users, agents, or transactions)
const mockData = [
  { id: 1, name: "User One", category: "user", status: "active", amount: 1000, date: "2025-08-01" },
  { id: 2, name: "Agent Two", category: "agent", status: "suspended", amount: 500, date: "2025-08-05" },
  { id: 3, name: "User Three", category: "user", status: "blocked", amount: 2000, date: "2025-08-07" },
  { id: 4, name: "Agent Four", category: "agent", status: "active", amount: 1500, date: "2025-08-10" },
  { id: 5, name: "User Five", category: "user", status: "active", amount: 2500, date: "2025-08-15" },
];

type Listings = {
  id: number;
  name:string;
  // role: "all" |"AGENT" | "USER";
  role: string;
  status: "success" | "pending" | "completed";
  wallet: {
    balance: number;
    // balance: string;
    is_block: boolean;
    status:string
  };
  created_at: string;
};

const ListingPage = () => {
  const [listings, setListings] = useState<Listings[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  // const [category, setCategory] = useState("all");
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // Pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

    // 🔹 Fetch transactions from API
  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem("dw_token");

      try {
        const response = await rootApi.get("/admin/listings", {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        });

        // API থেকে আসা data কে state এ সেট করা
        setListings(response.data.data);
      } catch (error: any) {
        console.error("Error:", error);

        if (error.response?.status === 403) {
          toast.error("You don't have permission to access this resource");
        } else if (error.response?.status === 401) {
          toast.error("Unauthorized, please log in again");
        } else {
          toast.error("Failed to load transactions");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);


  // Filtering logic
  // const filtered = mockData.filter((item) => {
  const filtered = listings.filter((item) => {
    const matchesSearch = !search || item.name.toLowerCase().includes(search.toLowerCase());
    const matchesRole = role === "all" || item.role === role;
    const matchesStatus = status === "all" || item.status === status;
    const matchesMin = !minAmount || item.wallet.balance >= Number(minAmount);
    const matchesMax = !maxAmount || item.wallet.balance <= Number(maxAmount);
    const matchesFromDate = !fromDate || item.created_at >= fromDate;
    const matchesToDate = !toDate || item.created_at <= toDate;

    return matchesSearch && matchesRole && matchesStatus && matchesMin && matchesMax && matchesFromDate && matchesToDate;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <motion.div className="p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">Listing Page</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            <Input placeholder="Search by name" value={search} onChange={(e) => setSearch(e.target.value)} />

            <Select onValueChange={setRole} defaultValue="all">
              <SelectTrigger><SelectValue placeholder="Category" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="USER">User</SelectItem>
                <SelectItem value="AGENT">Agent</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setStatus} defaultValue="all">
              <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Input type="number" placeholder="Min Amount" value={minAmount} onChange={(e) => setMinAmount(e.target.value)} />
              <Input type="number" placeholder="Max Amount" value={maxAmount} onChange={(e) => setMaxAmount(e.target.value)} />
            </div>

            <div className="flex gap-2 col-span-full lg:col-span-2">
              <Input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
              <Input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
            </div>
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Roll</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.length > 0 ? (
                paginated.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.role}</TableCell>
                    <TableCell
                      className={
                        item.wallet.is_block === true
                          ? "text-green-600"
                          : item.wallet.is_block === false
                          ? "text-red-600"
                          : "text-yellow-600"
                      }
                    >
                      {item.wallet.status==='completed' ? item.wallet.status : 'pending'}
                    </TableCell>
                    <TableCell>৳{item.wallet.balance}</TableCell>
                    <TableCell>{item.created_at}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-gray-500">
                    No results found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <Button variant="outline" onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
              Previous
            </Button>
            <span>Page {page} of {totalPages}</span>
            <Button variant="outline" onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ListingPage;

