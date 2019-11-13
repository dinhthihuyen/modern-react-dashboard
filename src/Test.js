import React, { Component } from 'react';
import Main from './containers/Main';
import MainMap from './containers/MainMap';
// import ReactDOM from 'react-dom';

class Test extends Component {
  render() {
    const mystyle = {
      width: "40vw"
    };
 
    const divstyle = {
        display: "inline",
        width: "100vw"
    };

    return (
    <div style={divstyle}>
        <div style={mystyle}>
            <Main />
        </div>
        <div style={mystyle}>
            <MainMap />
        </div>
    </div>
      
    );
  }
}

export default Test;