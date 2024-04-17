import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Header from "./component/Header";
import Body from "./component/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Cart from "./component/Cart";
import Restaurant from "./component/Restaurant";

/*
eg i want to create something like
<div>
<div>
<h1></h1>
<h2></h2>
</div>
</div>

*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "children" }, [
//     React.createElement("h1", { id: "h1" }, "I m heading 1 "),
//     React.createElement("h2", { id: "h2" }, "I m heading 2"),
//   ])
// );
// console.log(parent);
// const heading =React.createElement("h1",{id:"heading"},"Hellow World!!!!")

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <Restaurant />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: Cart,
      },
    ],
  },

  { errorElement: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={Router} />);


