import React, { Component } from "react";

import { MyContext } from "./Context/context";
import Stage1 from "./components/stage_1";
import Stage2 from "./components/stage_2";
import "react-toastify/dist/ReactToastify.css";

import "./styles/app.scss";
class App extends Component {
  static contextType = MyContext;

  render() {
    return (
      <div className="wrapper">
        <div className="center-wrapper">
          <h1>Who pays the bill?</h1>
          {this.context.state.stage === 1 ? <Stage1 /> : <Stage2 />}
        </div>
      </div>
    );
  }
}

export default App;
