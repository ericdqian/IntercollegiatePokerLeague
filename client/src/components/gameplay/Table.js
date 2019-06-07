import React from "react";
import Board from "./Board";
import PlayerContainer from "./PlayerContainer";
import './Table.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //How do I render a table lol
    const {numPlayers, buttonLocation, action, pot, players, board} = this.props;
    const theta = [0];
    for(var i = 1; i < numPlayers; i++) {
      theta.push(Math.PI * 2 * i/numPlayers);
    }
    const playersList = players.map((player, seat) => {
      const style = {
        'top': 280 - Math.round(250 * (Math.cos(theta[seat]))) + 'px',
        'left': 250 - 62 + Math.round(200 * (Math.sin(theta[seat]))) + 'px',
        'height': `150px`,
        'width': `125px`,
        'position': `absolute`,
      };
      return (
        // <PlayerContainer card1 = {player.hand[0]} card2 = {player.hand[1]} name = {player.id} stackSize = {player.stackSize} action = {action} inHand = {player.inHand}/>
        <div className = "test" style = {style}>
         <PlayerContainer card1 = {player.hand[0]} card2 = {player.hand[1]} name = {player.name} stackSize = {player.stackSize} action = {action} inHand = {player.inHand}/>
         </div>
      )
    })
    const playerInvestmentsList = players.map((player, seat) => {
      const style = {
        'top': 340 - Math.round(135 * (Math.cos(theta[seat]))) + 'px',
        'left': 250 + Math.round(200 * (Math.sin(theta[seat]))) + 'px',
        'height': `150px`,
        'width': `125px`,
        'position': `absolute`,
      };
      return (
        // <PlayerContainer card1 = {player.hand[0]} card2 = {player.hand[1]} name = {player.id} stackSize = {player.stackSize} action = {action} inHand = {player.inHand}/>
        <div className = "test" style = {style}>
          {player.investedStack}
         </div>
      )
    })
    const button = <div className = "test" style = {{position: 'absolute', top: 340 - Math.round(150 * (Math.cos(theta[buttonLocation]))) + 'px', 'left': 250 + Math.round(200 * (Math.sin(theta[buttonLocation]))) + 'px'}}> B </div>
    return (
      <div className = 'Table'>
      <div className = 'Pot' style = {{position: 'absolute', top: '280px', left: '250px'}}>{pot}</div>
      {playersList}
      {playerInvestmentsList}
      {button}
      <div style = {{borderRadius: `50%`, backgroundColor: '#bbb', height: '400px', width: '400px', left: '50px', top: '150px', position: 'absolute', zIndex: '-1'}}>
        <Board cardList = {board}/>
      </div>
      </div>
    )
  }
}

export default Table;
