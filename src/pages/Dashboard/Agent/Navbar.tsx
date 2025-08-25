import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">Digital Wallet</h1>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
