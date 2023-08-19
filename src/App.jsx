import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestroPage from "./Pages/RestroPage";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path:"restaurant/:resid",
        element: <RestroPage/>
      }
    ],
  },
]);

export default App;
