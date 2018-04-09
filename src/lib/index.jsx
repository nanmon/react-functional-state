import React, { Component } from "react";

function functionalState(initialState) {
  return Component => class _functionalState extends React.Component {
    constructor(props){
      super(props);
      this.state = initialState;
      this.setState = this.setState.bind(this);
    }
    render(){ 
      return <Component {...this.props} state={this.state} setState={this.setState}/>;
    }
  }
}

export default functionalState;