# React functional state

### Install
```
    npm i --save react-functional-state
```

### Usage
``` jsx
import functionalState from 'react-functional-state';

function StatelessButton({state, setState}) {
  return (
    <button onClick={() => setState({value: state.value + 1})}>
      Click to increment the value: {state.value}
    </button>
  );
}

const StatefulButton = functionalState({value: 1})(StatelessButton);
```
As simple as that
