import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownCircle, ArrowUpCircle, Activity } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-lg border-l-4 border-green-500">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Total Cash-In</CardTitle>
            <ArrowDownCircle className="text-green-600 w-6 h-6" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-700">
              ৳ {mockData.cashIn.toLocaleString()}
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
              ৳ {mockData.cashOut.toLocaleString()}
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
            {mockData.recentActivities.map((act) => (
              <li key={act.id} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium">
                    {act.type} — <span className="text-gray-600">{act.user}</span>
                  </p>
                  <p className="text-sm text-gray-500">{act.date}</p>
                </div>
                <p
                  className={`font-semibold ${
                    act.type === "Cash-In" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ৳ {act.amount.toLocaleString()}
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
