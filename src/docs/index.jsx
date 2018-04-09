import React from "react";
import { render } from "react-dom";
import functionalState from "../../lib";
import "./styles.css";

function StatelessButton({state, setState}) {
  return (
    <button onClick={() => setState({value: state.value + 1})}>
      Click to increment the value: {state.value}
    </button>
  );
}

const StatefulButton = functionalState({value: 1})(StatelessButton);

function Demo() {
  return (
    <div>
      <h1>Demo</h1>
      <StatefulButton/>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
