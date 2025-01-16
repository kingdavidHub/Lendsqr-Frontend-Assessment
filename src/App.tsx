import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import UserDetails from "./pages/UserDetails/UserDetails";
import Error from "./pages/Error/Error";
import ToggleProvider from "./provider/ToggleProvider";

const Layout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">{children}</div>
      </section>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <Sidebar />
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: "/user/:id/details",
    element: (
      <Layout>
        <Sidebar />
        <UserDetails />
      </Layout>
    ),
    errorElement: <Error />,
  },
]);



const App = () => {
  return (
    <ToggleProvider>
      <RouterProvider router={router} />
    </ToggleProvider>
  );
};
export default App;
