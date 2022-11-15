//! JSX Rules

//! React Fragments used to reduce the addition(Creating) of extra node in html

import React from "react";

class App3 extends React.Component{
    render() {
        return (
            //Shorter Syntax //! But it cant hold key attribute
        //   <>
        //     <div>Hi</div>
        //     <div>Hello</div>
        //     <p>Bye</p>
        //     </>
            // Original syntax
              <React.Fragment key="Abc">
            <div>Hi</div>
            <div>Hello</div>
            <p>Bye</p>
            </React.Fragment>
        );
    }
}

export default App3;