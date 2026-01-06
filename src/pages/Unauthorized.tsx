// import { Link } from "react-router";

// export default function Unauthorized() {
//   return (
//     <div>
//       <h1> Muri Khaa, tui authorized na....</h1>
//       <Link to="/">Home</Link>
//     </div>
//   );
// }


const Unauthorized = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl font-bold text-red-600">Unauthorized</h1>
    <p>You don’t have permission to view this page.</p>
  </div>
);

export default Unauthorized;
