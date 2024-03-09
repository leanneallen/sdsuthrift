import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from "./pages/Homepage.jsx"
import ListingPortal from './pages/ListingsPortal.jsx'
import ErrorPage from "./error-page.jsx"
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "ListingPortal/:contactId",
    element: <ListingPortal />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />

  </React.StrictMode>,
)
