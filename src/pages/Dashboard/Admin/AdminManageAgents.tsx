import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";

// Mock agents
const mockAgents = [
  { id: 1, name: "Agent A", phone: "018XXXXXXX", email: "agentA@example.com", status: "pending" },
  { id: 2, name: "Agent B", phone: "017XXXXXXX", email: "agentB@example.com", status: "approved" },
  { id: 3, name: "Agent C", phone: "019XXXXXXX", email: "agentC@example.com", status: "suspended" },
  { id: 4, name: "Agent D", phone: "016XXXXXXX", email: "agentD@example.com", status: "approved" },
  { id: 5, name: "Agent E", phone: "015XXXXXXX", email: "agentE@example.com", status: "pending" },
];

const AdminManageAgents = () => {
  const [agents, setAgents] = useState(mockAgents);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const filteredAgents = agents.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.phone.includes(search) ||
    a.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAgents.length / itemsPerPage);
  const paginatedAgents = filteredAgents.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const updateStatus = (id: number, newStatus: string) => {
    setAgents((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
    const updatedAgent = agents.find((a) => a.id === id);
    toast.success(`${updatedAgent?.name} is now ${newStatus.toUpperCase()}`);
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
              {paginatedAgents.length > 0 ? (
                paginatedAgents.map((agent) => (
                  <TableRow key={agent.id}>
                    <TableCell>{agent.id}</TableCell>
                    <TableCell>{agent.name}</TableCell>
                    <TableCell>{agent.phone}</TableCell>
                    <TableCell>{agent.email}</TableCell>
                    <TableCell
                      className={
                        agent.status === "approved"
                          ? "text-green-600"
                          : agent.status === "suspended"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }
                    >
                      {agent.status.toUpperCase()}
                    </TableCell>
                    <TableCell className="flex gap-2">
                      {agent.status !== "approved" && (
                        <Button
                          size="sm"
                          variant="default"
                          onClick={() => updateStatus(agent.id, "approved")}
                        >
                          Approve
                        </Button>
                      )}
                      {agent.status !== "suspended" && (
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => updateStatus(agent.id, "suspended")}
                        >
                          Suspend
                        </Button>
                      )}
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
