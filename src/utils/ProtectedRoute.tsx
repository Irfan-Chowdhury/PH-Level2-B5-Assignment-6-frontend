// import { Outlet, Navigate } from "react-router";





// const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
//   const token = localStorage.getItem(""); // Or use your auth context
//   const user = localStorage.getItem("dw_user") ? JSON.parse(localStorage.getItem("dw_user")!) : null;

//   // Not authenticated → redirect to login
//   if (!token || !user) {dw_token
//     return <Navigate to="/login" replace />;
//   }

//   // If roles are restricted and user doesn't have one → deny access
//   if (allowedRoles && !allowedRoles.includes(user.role)) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return <Outlet />; // Render children routes
// };

// export default ProtectedRoute;



// TypeScript: extend RouteObject to allow handle.allowedRoles
// declare module "react-router" {
//   interface RouteObject {
//     handle?: {
//       allowedRoles?: string[];
//     };
//   }
// }

import { Navigate, Outlet, useMatches } from "react-router";


interface ProtectedRouteProps {
  allowedRoles?: string[];
}

const ProtectedRoute = () => {
  const token = localStorage.getItem("dw_token");
  const role = localStorage.getItem("role"); // Example: "ADMIN" or "USER"

  // Get current route match
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1]; // deepest route
  // const allowedRoles = currentMatch.handle?.allowedRoles;
  const allowedRoles = (currentMatch.handle as { allowedRoles?: string[] })?.allowedRoles;

  // Not logged in → redirect
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Role not allowed → redirect
  if (allowedRoles && !allowedRoles.includes(role || "")) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />; // Render child routes
};

export default ProtectedRoute;


