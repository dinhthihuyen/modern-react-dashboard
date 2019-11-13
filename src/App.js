import React from "react";
import Main from "./containers/Main";
import MainMap from "./containers/MainMap";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    // return (
    // <BrowserRouter>
    //     <div>
    //       <ul>
    //         <li>
    //           <Link to="/main">Main</Link>
    //         </li>
    //         <li>
    //           <Link to="/mainmap">MainMap</Link>
    //         </li>
    //       </ul>
    //       <hr />
    //       <div className="main-route-place">
    //         <Route exact path="/main" component={Main} />
    //         <Route path="/mainmap" component={MainMap} />
    //       </div>
    //     </div>
    //   </BrowserRouter>
    console.log('render');
    return (
      <Main />
    );
  }
}

export default App;
