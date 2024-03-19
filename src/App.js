import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Header from "./component/Header";
import Body from "./component/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";

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
      <Body />
    </div>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  { errorElement: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={Router} />);


