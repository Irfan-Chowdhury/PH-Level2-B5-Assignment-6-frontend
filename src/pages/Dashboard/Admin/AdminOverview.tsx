import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { adminDashboardData, useGetAdminDashboardQuery } from "../../../redux/dashboardApi";

const COLORS = ["#4ade80", "#60a5fa"];

const AdminOverview = () => {

  const { data, isLoading, isError } = useGetAdminDashboardQuery();
  
  if (isLoading) return <p>Loading dashboard...</p>;
  if (isError) return <p>Failed to load dashboard</p>;

  // const dashboard = data?.data;
  const dashboard = data?.data as adminDashboardData | undefined;

  if (!dashboard) return <p>No dashboard data available</p>;

  // Mock data (replace with API later)
  const stats = {
    totalUsers: dashboard?.totalUsers ,
    totalAgents: dashboard?.totalAgents ,
    totalTransactions: dashboard?.totalTransactions ,
    totalVolume: dashboard?.totalVolume ,
  };

  const userAgentData = [
    { name: "Users", value: stats.totalUsers },
    { name: "Agents", value: stats.totalAgents },
  ];

  const transactionTrend = [
    { month: "Jan", volume: 80000 },
    { month: "Feb", volume: 120000 },
    { month: "Mar", volume: 150000 },
    { month: "Apr", volume: 100000 },
    { month: "May", volume: 200000 },
    { month: "Jun", volume: 180000 },
  ];

  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-blue-600">
            {stats.totalUsers}
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Total Agents</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-green-600">
            {stats.totalAgents}
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Total Transactions</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-purple-600">
            {stats.totalTransactions}
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Total Volume</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-orange-600">
            ৳{stats.totalVolume.toLocaleString()}
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>User vs Agent Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={userAgentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {userAgentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Line Chart */}
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Transaction Volume Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={transactionTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="volume" stroke="#6366f1" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default AdminOverview;
