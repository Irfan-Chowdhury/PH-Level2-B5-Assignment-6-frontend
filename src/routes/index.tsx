import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import Unauthorized from "@/pages/Unauthorized";
import { role } from "@/constants/role";
import { TRole } from "@/types";
import Tours from "@/pages/Tours";
import TourDetails from "@/pages/TourDetails";
import Booking from "@/pages/Booking";
import Homepage from "@/pages/Homepage";
import Success from "@/pages/Payment/Success";
import Fail from "@/pages/Payment/Fail";
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
import Profile from "@/pages/Dashboard/User/Profile";
import AgentOverview from "@/pages/Dashboard/Agent/AgentOverview";
import AgentLayout from "@/components/layout/AgentLayout";
import AgentAddMoney from "@/pages/Dashboard/Agent/AgentAddMoney";
import AgentWithdrawMoney from "@/pages/Dashboard/Agent/AgentWithdrawMoney";
import AgentTransactions from "@/pages/Dashboard/Agent/AgentTransactions";

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
      {
        Component: Tours,
        path: "tours",
      },
      {
        Component: TourDetails,
        path: "tours/:id",
      },
      {
        Component: withAuth(Booking),
        path: "booking/:id",
      },
    ],
  },
  {
    // Component: withAuth(DashboardLayout, role.superAdmin as TRole),
    Component: DashboardLayout,
    path: "/admin",
    children: [
      { 
        index: true, 
        element: <Navigate to="/admin/analytics" /> 
      },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  // {
  //   Component: withAuth(DashboardLayout, role.user as TRole),
  //   path: "/user",
  //   children: [
  //     { 
  //       index: true, 
  //       element: <Navigate to="/user/bookings" /> 
  //     },
  //     ...generateRoutes(userSidebarItems),
  //   ],
  // },
  {
    Component: UserLayout,
    path: "/user",
    children: [
      // { 
      //   index: true, 
      //   element: <Navigate to="/user/bookings" /> 
      // },
      {
        Component: UserOverview,
        path: "dashboard",
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
        Component: Profile,
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
      // {
      //   Component: WithdrawMoney,
      //   path: "withdraw-money",
      // },
      // {
      //   Component: SendMoney,
      //   path: "send-money",
      // },
      // {
      //   Component: TransactionHistory,
      //   path: "transaction-history",
      // },
      {
        Component: Profile,
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
  },
  {
    Component: Success,
    path: "/payment/success",
  },
  {
    Component: Fail,
    path: "/payment/fail",
  },
]);
