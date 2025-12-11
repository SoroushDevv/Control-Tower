import DashboardLayout from "./Layouts/Dashboard/DashboardLayout";
import Home from "./Pages/Home/Home";
import Orders from "./Pages/Orders/Orders";
import Users from "./Pages/Users/Users";
import Roles from "./Pages/Roles/Roles";
import Comments from "./Pages/Comments/Comments";
import Messages from "./Pages/Messages/Messages";
import Tickets from "./Pages/Messages/Tickets";
import Products from "./Pages/Products/Products";
import Services from "./Pages/Services/Services";
import Settings from "./Pages/Settings/Settings";
import Profile from "./Pages/Profile/Profile";
import Blogs from "./Pages/Blogs/Blogs";
import LoginPage from "./Pages/Login/LoginPage";


let routeConfig = [

  { path: "/login", element: <LoginPage /> },
    {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "orders", element: <Orders /> },
      { path: "users", element: <Users /> },
      { path: "roles", element: <Roles /> },
      { path: "comments", element: <Comments /> },
      { path: "messages", element: <Messages /> },
      { path: "tickets", element: <Tickets /> },
      { path: "products", element: <Products /> },
      { path: "services", element: <Services /> },
      { path: "settings", element: <Settings /> },
      { path: "profile", element: <Profile /> },
      { path: "blogs", element: <Blogs /> },

    ],
  },


];

export default routeConfig;