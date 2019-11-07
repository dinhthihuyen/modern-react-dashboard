import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      employee: []
    };
  }

  componentDidMount() {
    (async () => {
      const response = await axios({
        url: employee_api,
        method: "get"
      });

      this.setState({
        employee: response
      })
    })();
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return (
      
    );
  }
}

export default App;
