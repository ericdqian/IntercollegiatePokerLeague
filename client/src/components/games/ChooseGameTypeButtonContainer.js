import React from 'react';
import CustomGamesButton from './CustomGamesButton';
import NormalHUGameButton from './NormalHUGameButton';
import RankedHUGameButton from './RankedHUGameButton';
import './ChooseGameTypeButtonContainer.css';

class ChooseGameTypeButtonContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id = 'ChooseGameTypeButtonContainer'>
        <NormalHUGameButton {...this.props}/>
        <RankedHUGameButton {...this.props}/>
        <CustomGamesButton {...this.props} />
      </div>
    )

  }

}

export default ChooseGameTypeButtonContainer;
