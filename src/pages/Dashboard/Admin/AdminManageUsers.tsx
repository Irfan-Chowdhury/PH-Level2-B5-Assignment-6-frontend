import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";

// Mock users
const mockUsers = [
  { id: 1, name: "Irfan Chowdhury", phone: "018XXXXXXX", email: "irfan@example.com", status: "active" },
  { id: 2, name: "John Doe", phone: "017XXXXXXX", email: "john@example.com", status: "blocked" },
  { id: 3, name: "Jane Smith", phone: "019XXXXXXX", email: "jane@example.com", status: "active" },
  { id: 4, name: "Ali Hasan", phone: "016XXXXXXX", email: "ali@example.com", status: "active" },
  { id: 5, name: "Sara Khan", phone: "015XXXXXXX", email: "sara@example.com", status: "blocked" },
];

const AdminManageUsers = () => {
  const [users, setUsers] = useState(mockUsers);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.phone.includes(search) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const toggleStatus = (id: number) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "active" ? "blocked" : "active" }
          : u
      )
    );
    const updatedUser = users.find((u) => u.id === id);
    toast.success(
      `${updatedUser?.name} is now ${updatedUser?.status === "active" ? "blocked" : "active"}`
    );
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">Manage Users</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Search */}
          <div className="mb-4 flex justify-end">
            <Input
              placeholder="Search by name, phone, email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/3"
            />
          </div>

          {/* Users Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className={user.status === "active" ? "text-green-600" : "text-red-600"}>
                      {user.status.toUpperCase()}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant={user.status === "active" ? "destructive" : "default"}
                        size="sm"
                        onClick={() => toggleStatus(user.id)}
                      >
                        {user.status === "active" ? "Block" : "Unblock"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-gray-500">
                    No users found
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

export default AdminManageUsers;
