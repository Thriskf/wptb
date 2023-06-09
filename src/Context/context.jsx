import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

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
      toast.error("You need one than one player", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } else {
      this.setState({ stage: 2 }, () => {
        setTimeout(() => {
          this.getLoser();
        }, 2000);
      });
    }
  };
  getLoser = () => {
    const { players } = this.state;
    this.setState({
      result: players[Math.floor(Math.random() * players.length)],
    });
  };
  newGame = () => {
    this.setState({
      stage: 1,
      players: [],
      result: "",
    });
  };
  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayer: this.addPlayer,
            removePlayer: this.removePlayer,
            next: this.next,
            newLoser: this.getLoser,
            newGame: this.newGame,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
        <ToastContainer />
      </>
    );
  }
}

export { MyContext, MyProvider };
