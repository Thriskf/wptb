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
     toast.success("next", {
       position: toast.POSITION.TOP_CENTER,
       autoClose: 2000,
     });
    }
  };
  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayer: this.addPlayer,
            result: this.state.result,
            removePlayer: this.removePlayer,
            next: this.next,
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
