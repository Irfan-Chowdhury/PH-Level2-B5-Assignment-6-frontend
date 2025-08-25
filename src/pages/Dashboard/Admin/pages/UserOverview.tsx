import React from "react";
import { ArrowUpRight, ArrowDownLeft, Send } from "lucide-react";

const UserOverview = () => {
  return (
    <div className="space-y-8">
      {/* Wallet Balance */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-2">Wallet Balance</h2>
        <p className="text-3xl font-bold text-indigo-600">৳ 25,000</p>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-indigo-600 text-white p-4 rounded-xl shadow hover:bg-indigo-700 flex flex-col items-center">
            <ArrowDownLeft className="w-6 h-6 mb-2" /> Deposit
          </button>
          <button className="bg-indigo-600 text-white p-4 rounded-xl shadow hover:bg-indigo-700 flex flex-col items-center">
            <ArrowUpRight className="w-6 h-6 mb-2" /> Withdraw
          </button>
          <button className="bg-indigo-600 text-white p-4 rounded-xl shadow hover:bg-indigo-700 flex flex-col items-center">
            <Send className="w-6 h-6 mb-2" /> Send Money
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="bg-white rounded-xl shadow-md divide-y">
          <div className="flex justify-between p-4">
            <span>Cash In</span>
            <span className="text-green-600 font-semibold">+৳5,000</span>
          </div>
          <div className="flex justify-between p-4">
            <span>Send to +88017XXXXXXX</span>
            <span className="text-red-600 font-semibold">-৳1,200</span>
          </div>
          <div className="flex justify-between p-4">
            <span>Cash Out</span>
            <span className="text-red-600 font-semibold">-৳2,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOverview;
