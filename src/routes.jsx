import DashboardLayout from "./Layouts/Dashboard/DashboardLayout";
import Customers from "./Pages/Customers/Customers";
import Roles from "./Pages/Roles/Roles";
import Comments from "./Pages/Communications/Comments/Comments";
import Tickets from "./Pages/Communications/Tickets/Tickets";
import Notifications from "./Pages/Communications/Notifications/Notifications";
import Products from "./Pages/Products/Products";
import Services from "./Pages/Services/Services";
import Settings from "./Pages/Settings/Settings";
import Profile from "./Pages/Profile/Profile";
import Blogs from "./Pages/Blogs/Blogs";
import Stats from "./Pages/Stats/Stats";
import Offers from "./Pages/Offers/Offers";
import MainDashboard from "./Components/LayoutComponents/MainDashboard/MainDashboard";
import LoginPage from "./Pages/Login/LoginPage"
import CustomerDetails from "./Pages/Customers/CustomerDetails/CustomerDetails"
import ProductDetails from "./Pages/ProductDetailsPage/ProductDetails"
import Communications from "./Pages/Communications/Communications";
import Orders from "./Pages/Orders/Orders";
import OrderDetails from "./Components/LayoutComponents/OrderDetails/OrderDetails";

let routeConfig = [

  { path: "/login", element: <LoginPage /> },
  {
    path: "/", element: <DashboardLayout />,
    children: [
      { index: true, element: <MainDashboard /> },
      { path: "orders", element: <Orders /> },
      { path: "customers", element: <Customers />},
      { path: "customers/:userId", element: <CustomerDetails/>},
      {path:"products/:productId", element:<ProductDetails/>},
      {path:"orders/:orderId", element:<OrderDetails/>},
      {path:"communications" , element:<Communications />},
      { path: "roles", element: <Roles /> },
      { path: "comments", element: <Comments /> },
      { path: "notifications", element: <Notifications /> },
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