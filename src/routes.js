
import Home from "./Pages/Home/Home";
import Orders from "./Pages/Home/Orders";
import Login from "./Pages/Login/Login";
import Users from "./Pages/Users/Users";
import Roles from "./Pages/Roles/Roles";
import Dashboard from "./Pages/MainDashboard/Dashboard";
import Comments from "./Pages/Comments/Comments";
import Messages from "./Pages/Messages/Messages";
import Tickets from "./Pages/Messages/Tickts";
import Products from "./Pages/Products/Products";
import Services from "./Pages/Services/Services";
import Settings from "./Pages/Settings/Settings";
import Profile from "./Pages/Profile/Profile";
import Blogs from "./Pages/Blogs/Blogs";
import path from "path";





let routes = [
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/orders", element: <Orders /> },
  { path: "/login", element: <Login /> },
  { path: "/users", element: <Users /> },
  { path: "/roles", element: <Roles /> },
  { path: "/comments", element: <Comments /> },
  { path: "/messages", element: <Messages /> },
  { path: "/tickets", element: <Tickets /> },
  { path: "/products", element: <Products /> },
  { path: "/services", element: <Services /> },
  { path: "/settings", element: <Settings /> },
  { path: "/profile", element: <Profile /> },
  { path: "/blogs", element: <Blogs /> },
];

export default routes;