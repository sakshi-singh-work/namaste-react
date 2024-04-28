import React,{Suspense, lazy} from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Header from "./component/Header";
import Body from "./component/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Cart from "./component/Cart";
import Restaurant from "./component/Restaurant";
import useUserStatus from "./utils/useUserStatus";

const About = lazy(() => import("./component/About"));

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
  const userStatus = useUserStatus();
  if (!userStatus) {
    return <h1>Looks like you have lost your internet connection please try again</h1>;
  }
  return (
    <div className="bg-black">
      <Header />
      <Outlet />
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
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
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
