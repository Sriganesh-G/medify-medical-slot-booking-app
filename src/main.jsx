import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage.jsx";
import BookingPage from "./pages/BookingsPage/BookingPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "search", element: <SearchResultsPage /> },
  { path: "/my-bookings", element: <BookingPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
