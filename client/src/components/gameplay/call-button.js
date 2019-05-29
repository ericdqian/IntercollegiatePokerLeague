import React from 'react';

import {call} from "../../js/gameplay";


class CallButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className = "CallButton" onClick = {() => {call(this.props.socket)}}>
        {"Call"}
      </button>
    )
  }
}

export default CallButton;