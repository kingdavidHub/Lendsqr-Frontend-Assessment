import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    )
  }
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App