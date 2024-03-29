import React from "react";
import ResultsContainer from './ResultsContainer';
import ReturnToGameButton from './ReturnToGameButton';
import ReturnToHomeButton from './ReturnToHomeButton';
import './MatchLobbyContainer.css';

class MatchLobbyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchStatus: ''
    }
    const {socket} = this.props;
    socket.on('MATCH STATUS', (status) => {
      this.setState({matchStatus: status});
    })
  }

  componentDidMount() {
    const {socket} = this.props;
    socket.emit('GET MATCH STATUS');
  }

  render() {
    const {matchStatus} = this.state;
    const {socket} = this.props;
    if (matchStatus === 'in progress') {
      return (
        <div id = 'MatchLobbyContainer'>
          in progress
          <ReturnToGameButton {...this.props}/>
        </div>
      )
    } else if (matchStatus === 'finished') {
      return (
        <div id = 'MatchLobbyContainer'>
          <ResultsContainer socket = {socket} />
          <ReturnToHomeButton {...this.props}/>
        </div>
      )
    } else {
      return (
        <div> Loading </div>
      )
    }
  }
}

export default MatchLobbyContainer
