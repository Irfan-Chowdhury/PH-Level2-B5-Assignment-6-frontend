import React from "react";
import { Link } from "react-router";
import { Home, ArrowDown, ArrowUp, List, User } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-gray-100 flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-gray-800">
        Admin Dashboard
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link
          to="/admin/dashboard"
          className="flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg"
        >
          <Home className="w-5 h-5" />
          <span>Overview</span>
        </Link>

        <Link
          to="/admin/manage-users"
          className="flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg"
        >
          <ArrowDown className="w-5 h-5" />
          <span>Manage Users</span>
        </Link>

        <Link
          to="/admin/manage-agents"
          className="flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg"
        >
          <ArrowDown className="w-5 h-5" />
          <span>Manage Agents</span>
        </Link>

        <Link
          to="/admin/transactions"
          className="flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg"
        >
          <List className="w-5 h-5" />
          <span>Transactions</span>
        </Link>

        <Link
          to="/admin/listing"
          className="flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg"
        >
          <List className="w-5 h-5" />
          <span>Listing</span>
        </Link>

        <Link
          to="/admin/profile"
          className="flex items-center space-x-3 hover:bg-gray-800 p-2 rounded-lg"
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
