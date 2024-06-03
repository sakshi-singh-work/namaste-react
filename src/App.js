import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./component/Header";
import Body from "./component/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Cart from "./component/Cart";
import Restaurant from "./component/Restaurant";
import useUserStatus from "./utils/useUserStatus";
import LoggedInUser from "./utils/LoggedinUserContext";

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
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const data = { name: "Sakshi Singh" };
    setUserName(data.name);
  }, []);

  if (!userStatus) {
    return (
      <h1>
        Looks like you have lost your internet connection please try again
      </h1>
    );
  }
  return (
    <div className="bg-slate-100">
      <LoggedInUser.Provider value={userName}>
        {/* value={{userName:username,age:26}} */}
        <Header />
        <Outlet />
      </LoggedInUser.Provider>
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
