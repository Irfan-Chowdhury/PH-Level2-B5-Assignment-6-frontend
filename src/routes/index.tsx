import App from "@/App";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { createBrowserRouter, Navigate } from "react-router";
import { withAuth } from "@/utils/withAuth";
import Unauthorized from "@/pages/Unauthorized";
import Tours from "@/pages/Tours";
import TourDetails from "@/pages/TourDetails";
import Booking from "@/pages/Booking";
import Homepage from "@/pages/Homepage";
import Features from "@/pages/Features";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import UserLayout from "@/components/layout/UserLayout";
import UserOverview from "@/pages/Dashboard/User/UserOverview";
import DepositMoney from "@/pages/Dashboard/User/DepositMoney";
import WithdrawMoney from "@/pages/Dashboard/User/WithdrawMoney";
import SendMoney from "@/pages/Dashboard/User/SendMoney";
import TransactionHistory from "@/pages/Dashboard/User/TransactionHistory";
import AgentOverview from "@/pages/Dashboard/Agent/AgentOverview";
import AgentLayout from "@/components/layout/AgentLayout";
import AgentAddMoney from "@/pages/Dashboard/Agent/AgentAddMoney";
import AgentWithdrawMoney from "@/pages/Dashboard/Agent/AgentWithdrawMoney";
import AgentTransactions from "@/pages/Dashboard/Agent/AgentTransactions";
import AdminOverview from "@/pages/Dashboard/Admin/AdminOverview";
import AdminLayout from "@/components/layout/AdminLayout";
import AdminManageUsers from "@/pages/Dashboard/Admin/AdminManageUsers";
import AdminManageAgents from "@/pages/Dashboard/Admin/AdminManageAgents";
import AdminTransactions from "@/pages/Dashboard/Admin/AdminTransactions";
import ListingPage from "@/pages/Dashboard/Admin/ListingPage";
import AdminProfile from "@/pages/Dashboard/Admin/Profile";
import UserProfile from "@/pages/Dashboard/User/Profile";
import AgentProfile from "@/pages/Dashboard/Agent/Profile";
import { role } from "@/constants/role";
import { TRole } from "@/types";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Features,
        path: "features",
      },
      {
        Component: Pricing,
        path: "prices",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: FAQ,
        path: "faq",
      },
    ],
  },

  {
    Component: AdminLayout,
    path: "/admin",
    children: [
      { 
        index: true, 
        element: <Navigate to="/admin/dashboard" /> 
      },
      {
        Component: AdminOverview,
        path: "dashboard",
      },
      {
        Component: AdminManageUsers,
        path: "manage-users",
      },
      {
        Component: AdminManageAgents,
        path: "manage-agents",
      },
      {
        Component: AdminTransactions,
        path: "transactions",
      },
      {
        Component: ListingPage,
        path: "listing",
      },
      {
        Component: AdminProfile,
        path: "profile",
      },
    ],
  },

  {
    Component: UserLayout,
    path: "/user",
    children: [
      {
        Component: UserOverview,
        path: "dashboard",
      },
      { 
        index: true, 
        element: <Navigate to="/user/dashboard" /> 
      },
      {
        Component: DepositMoney,
        path: "deposit-money",
      },
      {
        Component: WithdrawMoney,
        path: "withdraw-money",
      },
      {
        Component: SendMoney,
        path: "send-money",
      },
      {
        Component: TransactionHistory,
        path: "transaction-history",
      },
      {
        Component: UserProfile,
        path: "profile",
      },
    ],
  },
    {
    Component: AgentLayout,
    path: "/agent",
    children: [
      {
        Component: AgentOverview,
        path: "dashboard",
      },
      {
        Component: AgentAddMoney,
        path: "add-money",
      },
      {
        Component: AgentWithdrawMoney,
        path: "withdraw-money",
      },
      {
        Component: AgentTransactions,
        path: "transaction-history",
      },
      {
        Component: AgentProfile,
        path: "profile",
      },
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  }
]);





// Backend : 
// Repository : https://github.com/Irfan-Chowdhury/PH-Level2-B5-Assignment-5
// Live Link : https://digital-wallet-api-blush.vercel.app


// Frontend : 
// Repository : https://github.com/Irfan-Chowdhury/PH-Level2-B5-Assignment-6-frontend
// Live Link : digital-wallet-frontend-chi.vercel.app
