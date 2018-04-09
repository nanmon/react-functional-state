# React functional state

``` jsx
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
