import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body"

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Cart } from "./Components/Cart";
import { Error } from "./Components/Error";
import Menu from "./Components/Menu"
import About from "./Components/About";
// import { Grocery } from "./Components/Grocery";

const Grocery = lazy(()=>import("./Components/Grocery"))

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {

        path:"/about",
        element:<About/>
      },
      {

        path:"/grocery",
        element:<Suspense fallback={<h1>Loading.......</h1>}>
          <Grocery/>
          
          </Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurants/:resId",
        element:<Menu />
      }
    ],
    errorElement: <Error/>
  },

 
])

const root = ReactDOM.createRoot(document.querySelector("root"));
root.render(<RouterProvider router={appRouter}/>);
