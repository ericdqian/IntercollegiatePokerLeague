import React from 'react';
import vars from '../../vars';
import './QuitSearchButton.css';

class QuitSearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }

  onClick() {
    fetch(vars.protocol + '://' + vars.serverEndpoint + ':' + vars.port + '/api/choose-game/cancel-match', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
      credentials : 'include',
      withCredentials : true,
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        this.props.history.push('/choose-game');
      } else {
        alert('Quit search failed');
      }
    });
  }

  render() {
    return (
      <button id = 'QuitSearchButton' className = 'BackgroundDiv' onClick = {() => {this.onClick();}}>
        Quit Searching
      </button>
    )
  }
}

export default QuitSearchButton;
