import React from "react";
import { createRoot } from "react-dom/client";
import "./Global.css"

//? Class Based

// import App from "./app";
// createRoot(document.getElementById("root")).render(<App />);

// //? Function based

// import App1 from "./app1";
// createRoot(document.getElementById("root")).render(<App1 />);

//? Create A Element Without using JSX

// let h1 = React.createElement("h1", { className: "hello", style: { color: "red" } }, "Hello Menoj from React Create");
// createRoot(document.getElementById("root")).render(h1);

//? Create A Form using create React method

// import App2 from "./app2";
// createRoot(document.getElementById("root")).render(<App2 />);

//? Create A Form using JSX method

// import App2 from "./app2";
// createRoot(document.getElementById("root")).render(<App2/>);

//? Rules for JSX

//? React Fragments

// import App3 from "./app3";
// createRoot(document.getElementById("root")).render(<App3/>);
//! Components NavBar 

// import Appn from "./Navigation/App";
// createRoot(document.getElementById("root")).render(<Appn/>);

//! Components Application

import App4 from "./app4";
createRoot(document.getElementById("root")).render(<App4/>);