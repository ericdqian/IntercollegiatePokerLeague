import React from "react";
import Board from "./Board";
import PlayerContainer from "./PlayerContainer";
import { connect } from "react-redux";
import './Table.css';

function mapStateToProps(state) {
  return {
    numPlayers: state.numPlayers,
    buttonLocation: state.buttonLocation,
    action: state.action,
    pot: state.pot,
    board: state.board,
    players: state.players,
    time: state.time,
    maxTime: state.maxTime,
  }
}

class RawTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //How do I render a table lol
    const {numPlayers, buttonLocation, action, pot, players, board, time, maxTime} = this.props;
    const theta = [0];
    for(var i = 1; i < numPlayers; i++) {
      theta.push(Math.PI * 2 * i/numPlayers);
    }
    const playersList = players.map((player, seat) => {
      const style = {
        'top': 290 - Math.round(250 * (Math.cos(theta[seat]))) + 'px',
        'left': 250 - 90 + Math.round(200 * (Math.sin(theta[seat]))) + 'px',
        'height': `150px`,
        'width': `125px`,
        'position': `absolute`,
      };
      return (
        <div className = "PlayerContainerPositioningDiv" style = {style}>
         <PlayerContainer card1 = {player.hand[0]} card2 = {player.hand[1]} name = {player.name} stackSize = {player.stackSize} action = {seat === action} inHand = {player.inHand} time = {time} maxTime = {maxTime}/>
         </div>
      )
    })
    const playerInvestmentsList = players.map((player, seat) => {
      const style = {
        'top': 340 - Math.round(135 * (Math.cos(theta[seat]))) + 'px',
        'left': 250 - 62 + Math.round(200 * (Math.sin(theta[seat]))) + 'px',
        'height': `150px`,
        'width': `125px`,
        'position': `absolute`,
        'text-align': 'center',
        color: 'white',
      };
      if (player.investedStack > 0) {
        return (
          <div className = "test" style = {style}>
            {player.investedStack}
           </div>
        )
      } else {
        return (
          <div></div>
        )
      }


    })
    const button = <div id = 'DealerButton' style = {{color: 'white', 'width': '50px', 'text-align': 'center', position: 'absolute', top: 340 - Math.round(160 * (Math.cos(theta[buttonLocation]))) + 'px', 'left': 250 - 25 + Math.round(200 * (Math.sin(theta[buttonLocation]))) + 'px'}}> B </div>
    const potDiv = <div id = 'Pot' style = {{color: 'white', 'width': '50px', 'text-align': 'center',position: 'absolute', top: '280px', left: '225px'}}>{pot}</div>
    return (
      <div id = 'Table'>
      {potDiv}
      {playersList}
      {playerInvestmentsList}
      {button}
      <div style = {{borderRadius: `50%`, backgroundColor: 'green', border: '5px solid grey', height: '400px', width: '400px', left: 250 - 205 + 'px', top: '150px', position: 'absolute', zIndex: '-1'}}>
        <Board cardList = {board}/>
      </div>
      </div>
    )
  }
}

const Table = connect(mapStateToProps)(RawTable);
export default Table;
