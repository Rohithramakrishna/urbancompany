// //! Creating a form without JSX

import React, { Component } from "react";
// import { createElement } from "react";//! Not required

// class App2 extends Component{
//     render() {
//         let form = React.createElement(
//           "form",
//           { action: "#", method: "get" },
//           React.createElement(
//             "div",
//             { className: "inp1" },
//             React.createElement("label", { htmlFor: "email" }, "Email"),
//             React.createElement("input", { id: "email", type: "email" })
//           ),
//           React.createElement(
//             "div",
//             { className: "inp2" },
//             React.createElement("label", { htmlFor: "pass" }, "Password"),
//             React.createElement("input", { id: "pass", type: "password" })
//           ),
//           React.createElement(
//             "div",
//             { className: "inp3" },
//             React.createElement("button", { id: "btn"},"Submit")
//           )
//         );
//         return form;
//     }
// }
// export default App2;

//! Creating a form with JSX

class App2 extends Component {
    render() {

        let form = (
          <form>
            <div className="inp1">
              <label htmlFor="email">Email</label>
              <br></br>
              <input type="email" id="mail" />
            </div>
            <div className="inp2">
              <label htmlFor="pass">Password</label>
              <br></br>
              <input type="password" id="pass" />
                </div>
                <button>Submit</button>
          </form>
        );
        return form;
    }
}
export default App2;
