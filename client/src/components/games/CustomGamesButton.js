import React from 'react';
import { connect } from "react-redux";
import './CustomGamesButton.css';
import {changeStoreState} from '../../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    changeStoreState: article => dispatch(changeStoreState(article))
  };
}

function mapStateToProps(state) {
  return {
    gameType: state.gameType,
  }
}


class RawCustomGamesButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test : 'CustomMatch',
    }
  }

  clickLogic() {
    const {test} = this.state;
    this.props.changeStoreState({ gameType: test });
    //this.props.history.push("/games")
  }

  render() {
    const {gameType} = this.props;
    if (gameType === this.state.test) {
      return (
        <div id = 'CustomGamesButtonSelected' className = 'ChooseGameTypePanel' onClick = {() => {this.clickLogic();}}>
          <div className = 'ChooseGameTypeHeader DarkDiv'>
            <div className = 'ChooseGameTypeHeaderText'>
              Custom
            </div>
          </div>
          <div className = 'ChooseGameTypeBody WhiteDiv'>
            Create a custom match to play with your friends
          </div>
        </div>
      )
    } else {
      return (
        <div id = 'CustomGamesButton' className = 'ChooseGameTypePanel' onClick = {() => {this.clickLogic();}}>
          <div className = 'ChooseGameTypeHeader BackgroundDiv'>
            <div className = 'ChooseGameTypeHeaderText'>
              Custom
            </div>
          </div>
          <div className = 'ChooseGameTypeBody WhiteDiv'>
            Create a custom match to play with your friends
          </div>
        </div>
      )
    }


  }
}

const CustomGamesButton = connect(mapStateToProps, mapDispatchToProps)(RawCustomGamesButton);

export default CustomGamesButton;
