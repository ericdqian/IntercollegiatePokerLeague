import React from 'react';

class RankedHUGameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }
  clickLogic() {
    fetch("http://localhost:8081/api/choose-game/join-ranked", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
      credentials : 'include',
      withCredentials : true,
    })
  }

  render() {
    return (
      <button className = 'RankedHUGameButton' onClick = {() => {this.clickLogic()}}>
        Ranked HU Game
      </button>
    )

  }
}

export default RankedHUGameButton;
