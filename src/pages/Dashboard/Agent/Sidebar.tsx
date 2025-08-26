import React from "react";
import { Link } from "react-router";
import { Home, ArrowDown, ArrowUp, List, User } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-emerald-700 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-emerald-600">
        Agent Dashboard
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link
          to="/agent/dashboard"
          className="flex items-center space-x-3 hover:bg-emerald-600 p-2 rounded-lg"
        >
          <Home className="w-5 h-5" />
          <span>Overview</span>
        </Link>

        <Link
          to="/agent/add-money"
          className="flex items-center space-x-3 hover:bg-emerald-600 p-2 rounded-lg"
        >
          <ArrowDown className="w-5 h-5" />
          <span>Add Money</span>
        </Link>

        <Link
          to="/agent/withdraw-money"
          className="flex items-center space-x-3 hover:bg-emerald-600 p-2 rounded-lg"
        >
          <ArrowUp className="w-5 h-5" />
          <span>Withdraw</span>
        </Link>

        <Link
          to="/agent/transaction-history"
          className="flex items-center space-x-3 hover:bg-emerald-600 p-2 rounded-lg"
        >
          <List className="w-5 h-5" />
          <span>Transactions</span>
        </Link>

        <Link
          to="/agent/profile"
          className="flex items-center space-x-3 hover:bg-emerald-600 p-2 rounded-lg"
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
