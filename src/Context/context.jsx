import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    stage: 1,
    players: [],
    result: "",
  };

  addPlayer = (playerName) => {
    this.setState((prevState) => ({
      players: [...prevState.players, playerName],
    }));
  };

  removePlayer = (idx) => {
    let newPlay = this.state.players;
    newPlay.splice(idx, 1);
    this.setState({ players: newPlay });
  };
  next = () => {
    const { players } = this.state;
    if (players.length < 2) {
      alert("error");
    } else {
      alert("stage 2");
    }
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          addPlayer: this.addPlayer,
          result: this.state.result,
          removePlayer: this.removePlayer,
          Next: this.next,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
