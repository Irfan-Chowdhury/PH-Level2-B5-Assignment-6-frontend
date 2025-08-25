import React from "react";
import { Link } from "react-router";
import { Home, ArrowDown, ArrowUp, Send, List, User } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-indigo-700 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-indigo-600">
        Agent Dashboard
      </div>
      <nav className="flex-1 px-4 py-6 space-y-4">
        <a href="#" className="flex items-center space-x-3 hover:bg-indigo-600 p-2 rounded">
          <Home className="w-5 h-5" />  <Link to="/agent/dashboard"> <span>Overview</span> </Link>
        </a>
        <a className="flex items-center space-x-3 hover:bg-indigo-600 p-2 rounded">
            <ArrowDown className="w-5 h-5" /> <Link to="/agent/add-money"> <span>Add Money</span></Link>
        </a>
        <a href="#" className="flex items-center space-x-3 hover:bg-indigo-600 p-2 rounded">
          <ArrowUp className="w-5 h-5" /> <Link to="/agent/withdraw-money"><span>Withdraw</span> </Link>  
        </a>
       
        <a href="#" className="flex items-center space-x-3 hover:bg-indigo-600 p-2 rounded">
          <List className="w-5 h-5" /> <Link to="/agent/transaction-history"> <span>Transactions</span> </Link>
        </a>
        <a href="#" className="flex items-center space-x-3 hover:bg-indigo-600 p-2 rounded">
          <User className="w-5 h-5" /> <Link to="/agent/profile"> <span>Profile</span> </Link>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
