import React from 'react';
import {raise} from "../../js/gameplay";
import { connect } from "react-redux";
import './RaiseButton.css';
import {changeGameType} from '../../actions/index';


function mapDispatchToProps(dispatch) {
  return {
    changeGameType: article => dispatch(changeGameType(article))
  };
}

function mapStateToProps(state) {
  return {
    raiseSize: state.raiseSize,
  }
}

class RawRaiseButton extends React.Component {
  //from https://reactjs.org/docs/forms.html
  constructor(props) {
    super(props);
    this.state = {
      value : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.changeGameType({raiseSize: event.target.value});
  }

  handleSubmit() {
    raise(this.props.socket, this.props.raiseSize);
    // this.setState({value: ''});
  }

  render() {
    return (
        <button id = 'RaiseButton' className = 'ActionButton BackgroundDiv' onClick = {() => this.handleSubmit()}>
          Raise to
        </button>
    );
  }
}

const RaiseButton = connect(mapStateToProps, mapDispatchToProps)(RawRaiseButton);
export default RaiseButton;
