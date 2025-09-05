import { Link } from "react-router";
import { ArrowDownLeft, ArrowUpRight, Send } from "lucide-react";
import { useGetDashboardQuery } from "../../../redux/dashboardApi";

const UserOverview = () => {
  const { data, isLoading, isError } = useGetDashboardQuery();

  if (isLoading) return <p>Loading dashboard...</p>;
  if (isError) return <p>Failed to load dashboard</p>;

  const dashboard = data?.data;

  return (
    <div className="space-y-8">
      {/* Wallet Balance */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-2">Wallet Balance</h2>
        <p className="text-3xl font-bold text-indigo-600">
          ৳ {dashboard?.walletRemainingBalance}
        </p>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-4">
          <Link to="/user/deposit-money" className="w-full">
            <button className="bg-indigo-600 text-white p-4 rounded-xl shadow hover:bg-indigo-700 flex flex-col items-center w-full">
              <ArrowDownLeft className="w-6 h-6 mb-2" />
              <span>Deposit</span>
            </button>
          </Link>

          <Link
            to="/user/withdraw-money"
            className="bg-indigo-600 text-white p-4 rounded-xl shadow hover:bg-indigo-700 flex flex-col items-center"
          >
            <ArrowUpRight className="w-6 h-6 mb-2" />
            <span>Withdraw</span>
          </Link>

          <Link
            to="/user/send-money"
            className="bg-indigo-600 text-white p-4 rounded-xl shadow hover:bg-indigo-700 flex flex-col items-center"
          >
            <Send className="w-6 h-6 mb-2" />
            <span>Send Money</span>
          </Link>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="bg-white rounded-xl shadow-md divide-y">
          <div className="flex justify-between p-4">
            <span>Deposit</span>
            <span className="text-green-600 font-semibold">
              +৳{dashboard?.deposit}
            </span>
          </div>
          <div className="flex justify-between p-4">
            <span>Send Money</span>
            <span className="text-red-600 font-semibold">
              -৳{dashboard?.sendMoney}
            </span>
          </div>
          <div className="flex justify-between p-4">
            <span>Withdraw</span>
            <span className="text-red-600 font-semibold">
              -৳{dashboard?.withdraw}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOverview;
