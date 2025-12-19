import DashboardLayout from "./Layouts/Dashboard/DashboardLayout";
import Orders from "./Pages/Orders/Orders";
import Customers from "./Pages/Customers/Customers";
import Roles from "./Pages/Roles/Roles";
import Comments from "./Pages/Comments/Comments";
import Messages from "./Pages/Messages/Messages";
import Tickets from "./Pages/Messages/Tickets";
import Products from "./Pages/Products/Products";
import Services from "./Pages/Services/Services";
import Settings from "./Pages/Settings/Settings";
import Profile from "./Pages/Profile/Profile";
import Blogs from "./Pages/Blogs/Blogs";
import Stats from "./Pages/Stats/Stats";
import Offers from "./Pages/Offers/Offers";
import Notifications from "./Pages/Notifications/Notifications";
import MainDashboard from "./Components/LayoutComponents/MainDashboard/MainDashboard";
import LoginPage from "./Pages/Login/LoginPage"


let routeConfig = [

  { path: "/login", element: <LoginPage /> },
  {
    path: "/", element: <DashboardLayout />,
    children: [
      { index: true, element: <MainDashboard /> },
      { path: "orders", element: <Orders /> },
      { path: "customers", element: <Customers /> },
      { path: "roles", element: <Roles /> },
      { path: "comments", element: <Comments /> },
      { path: "messages", element: <Messages /> },
      { path: "tickets", element: <Tickets /> },
      { path: "products", element: <Products /> },
      { path: "services", element: <Services /> },
      { path: "settings", element: <Settings /> },
      { path: "profile", element: <Profile /> },
      { path: "blogs", element: <Blogs /> },
      { path: "offers", element: <Offers /> },
      { path: "notifications", element: <Notifications /> },
      { path: "stats", element: <Stats /> },
    ],
  },


];

export default routeConfig;