import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownCircle, ArrowUpCircle, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { agentDashboardData, useGetAgentDashboardQuery } from "../../../redux/dashboardApi";

const mockData = {
  cashIn: 125000,
  cashOut: 98000,
  recentActivities: [
    { id: 1, type: "Cash-In", user: "018XXXXXXXX", amount: 5000, date: "2025-08-20" },
    { id: 2, type: "Cash-Out", user: "017YYYYYYYY", amount: 3000, date: "2025-08-19" },
    { id: 3, type: "Cash-In", user: "019ZZZZZZZZ", amount: 7000, date: "2025-08-18" },
  ],
};

const AgentOverview = () => {


  const { data, isLoading, isError } = useGetAgentDashboardQuery();

  if (isLoading) return <p>Loading dashboard...</p>;
  if (isError) return <p>Failed to load dashboard</p>;

  // const dashboard = data?.data;
  const dashboard = data?.data as agentDashboardData | undefined;

  if (!dashboard) return <p>No dashboard data available</p>;

  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Summary Cards */}
            
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-2">Wallet Remaining Balance</h2>
        <p className="text-3xl font-bold text-indigo-600">
          ৳ {dashboard?.walletRemainingBalance.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}

        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-lg border-l-4 border-green-500">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Total Cash-In</CardTitle>
            <ArrowDownCircle className="text-green-600 w-6 h-6" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-700">
              ৳ {dashboard?.cashIn.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg border-l-4 border-red-500">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Total Cash-Out</CardTitle>
            <ArrowUpCircle className="text-red-600 w-6 h-6" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-red-700">
              ৳ {dashboard?.cashOut.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="rounded-2xl shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" /> Recent Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
  <ul className="divide-y divide-gray-200">
    {dashboard.transactions.map((act) => (
      <li key={act.id} className="py-3 flex justify-between items-center">
        <div>
          <p className="font-medium">
            {act.type.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())} —{" "}
            <span className="text-gray-600">{act.userPhone}</span>
          </p>
          <p className="text-sm text-gray-500">{act.created_at}</p>
        </div>
        <p
          className={`font-semibold ${
            act.type === "cash-in" ? "text-green-600" : "text-red-600"
          }`}
        >
          ৳ {act.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}

        </p>
      </li>
    ))}
  </ul>
</CardContent>

      </Card>
    </motion.div>
  );
};

export default AgentOverview;
