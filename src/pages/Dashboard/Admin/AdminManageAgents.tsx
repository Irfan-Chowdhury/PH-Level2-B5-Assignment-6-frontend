import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";
import rootApi from "../../../redux/rootAPI";
import { toggleUserOrAgentStatus } from "../../../services/userService";

type Agent = {
  id: number;
  name: string;
  phone: string;
  email: string;
  isActive: boolean;
};


const AdminManageAgents = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  // 🔹 Fetch users from API
  useEffect(() => {
    const fetchAgents = async () => {
      const token = localStorage.getItem("dw_token");

      try {
        const response = await rootApi.get("/agents",
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAgents(response.data.data);

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

    fetchAgents();
  }, []);

  const filteredUsers = agents.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.phone.includes(search) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedAgents = filteredUsers.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const toggleStatus = async (id: number) => {
    try {
      // Call backend
      const updatedUser = await toggleUserOrAgentStatus(id);

      // Update state
      setAgents((prev) =>
        prev.map((user) =>
          user.id === id ? updatedUser : user
        )
      );

      toast.success(
        `${updatedUser.name} is now ${updatedUser.isActive ? "active" : "blocked"}`
      );
    } catch (error) {
      toast.error("Failed to update status");
    }
  };
  
  

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">Manage Agents</CardTitle>
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

         {/* Agents Table */}
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
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
                    Loading agents...
                  </TableCell>
                </TableRow>
              ) : paginatedAgents.length > 0 ? (
                paginatedAgents.map((agent) => (
                  <TableRow key={agent.id}>
                    <TableCell>{agent.id}</TableCell>
                    <TableCell>{agent.name}</TableCell>
                    <TableCell>{agent.phone}</TableCell>
                    <TableCell>{agent.email}</TableCell>
                    <TableCell className={agent.isActive ? "text-green-600" : "text-red-600"}>
                      {agent.isActive ? "Active" : "Blocked"}
                    </TableCell>

                    <TableCell>
                      <Button
                        variant={agent.isActive ? "destructive" : "default"}
                        size="sm"
                        onClick={() => toggleStatus(agent.id)}
                      >
                        {agent.isActive ? "Block" : "Unblock"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-gray-500">
                    No agents found
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

export default AdminManageAgents;
