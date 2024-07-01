import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/Home";
import ErrorComp from "../comopnents/ErrorComp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorComp />
  },
]);
