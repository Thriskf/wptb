import React, { useContext } from "react";

import { MyContext } from "../Context/context";
const Stage2 = () => {
    const context = useContext(MyContext)
    return (
      <>
            <div className="result_wrapper">
                <h3>The looser is:</h3>
                <div>The looser</div>
            </div>
      </>
    );
}

export default Stage2 