import React, { useState, useRef, useContext } from "react";

import { MyContext } from "../Context/context";

import { Button, Form, Alert } from "react-bootstrap";

const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, ""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    if (validate) {
      setError([false, ""]);
      context.addPlayer(value);

      textInput.current.value = "";
    }
  };

  const validateInput = (value) => {
    if (value === "") {
      setError([true, "You need to add a player"]);
      return false;
    }
    if (value.length <= 2) {
      setError([true, "Name should be more than 3 letters"]);
      return false;
    }
    return true;
    console.log(context);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mt-4 mb-3">
          <Form.Control
            type="text"
            placeholder="Add player name"
            name="player"
            ref={textInput}
          />
        </Form.Group>
        {error[0] ? <Alert variant="danger">{error[1]}</Alert> : null}

        <Button className="miami mt-3" variant="primary" type="submit">
          Add Player
        </Button>
        {context.state.players && context.state.length > 0 ? (
          <>
            <hr />
            <div>
              <ul className="list-group">
                {context.state.players.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </>
        ) : null}
      </Form>
    </>
  );
};

export default Stage1;
