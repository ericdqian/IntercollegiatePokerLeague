import React from 'react';
import { connect } from "react-redux";
import {changeStoreState} from '../../actions/index';
import './ChooseRaiseSizeButton.css';

function mapDispatchToProps(dispatch) {
  return {
    changeStoreState: article => dispatch(changeStoreState(article))
  };
}


class RawChooseRaiseSizeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  clickLogic() {
    const {raiseSize} = this.props;
    this.props.changeStoreState({ raiseSize : raiseSize });
  }

  render() {
    const {buttonText} = this.props;
    return(
      <button className = 'ChooseRaiseSizeButton BackgroundDiv' onClick = {() => {this.clickLogic()}}>
        {buttonText}
      </button>
    )
  }
}

const ChooseRaiseSizeButton = connect(null, mapDispatchToProps)(RawChooseRaiseSizeButton);
export default ChooseRaiseSizeButton;
