import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import RestroPage from "./Pages/RestroPage";
import { Provider } from "react-redux";
import store from "./Redux/store";
import CartPage from "./Pages/CartPage";
import ErrorPage from "./Utils/ErrorPage";
import SignIn from "./Pages/SignIn"
import ContactUs from "./Pages/ContactUs"

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "restaurant/:resid",
        element: <RestroPage />,
      },
      {
        path: "cartpage/",
        element: <CartPage />,
      },
      {
        path: "contactus/",
        element: <ContactUs />,
      },
       {
        path: "signin/",
        element: <SignIn />,
      }
    ],
  },
]);

export default App;
