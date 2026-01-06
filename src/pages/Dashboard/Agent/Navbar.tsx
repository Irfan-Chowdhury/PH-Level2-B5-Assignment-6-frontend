import React from "react";
import { useLogout } from "../../../hooks/useLogout";

const Navbar = () => {

    const handleLogout = useLogout();
  
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-emerald-600">Digital Wallet</h1>
      <button onClick={handleLogout}  className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
