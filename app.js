/*
eg i want to create something like
<div>
<div>
<h1></h1>
<h2></h2>
</div>
</div>

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", { id: "h1" }, "I m heading 1 "),
    React.createElement("h2", { id: "h2" }, "I m heading 2"),
  ])
);
console.log(parent);
// const heading =React.createElement("h1",{id:"heading"},"Hellow World!!!!")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
