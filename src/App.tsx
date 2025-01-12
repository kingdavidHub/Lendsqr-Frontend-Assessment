import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  }
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App