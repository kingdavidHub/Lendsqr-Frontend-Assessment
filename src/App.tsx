import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { ToggleProvider } from "./context/ToggleContext";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
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
