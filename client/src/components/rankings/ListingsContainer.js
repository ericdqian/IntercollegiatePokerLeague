import React from 'react';
import { connect } from "react-redux";
import PlayerRanking from './PlayerRanking';
import SchoolRanking from './SchoolRanking';
import IndividualsHUHeader from './IndividualsHUHeader';
import SchoolsHUHeader from './SchoolsHUHeader';
import vars from '../../vars';
import './ListingsContainer.css';

function mapStateToProps(state) {
  console.log(state);
  return {
    requestedLeaderboard: state.requestedLeaderboard,
  }
}

class RawListingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      huRankings: [],
    }
  }

  componentDidMount() {
    fetch(vars.protocol + '://' + vars.serverEndpoint + ':' + vars.port + '/api/rankings/hu-individual-leaderboard', {withCredentials: true, credentials: 'include'}, {
      })
      .then(response => response.json())
      .then(data => {
        this.setState({huRankings: data.huRankings });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.requestedLeaderboard !== this.props.requestedLeaderboard) {
      fetch(vars.protocol + '://' + vars.serverEndpoint + ':' + vars.port + '/api/rankings/' + this.props.requestedLeaderboard, {withCredentials: true, credentials: 'include'}, {
        })
        .then(response => response.json())
        .then(data => {
          this.setState({huRankings: data.huRankings });
        });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    const {huRankings} = this.state;
    const {requestedLeaderboard} = this.props;
    if (requestedLeaderboard === 'hu-school-leaderboard') {
      const huRankingsList = huRankings.map((listing, place) => {
        return (
          <SchoolRanking schoolName = {listing[0]} ranking = {listing[1]} place = {place + 1}/>
        )
      })
      return (
        <div id = 'LadderListingsContainer'>
          Top Schools
          <SchoolsHUHeader/>
          <div id = 'LadderListings'>
            {huRankingsList}
          </div>
        </div>
      )
    } else {
      const huRankingsList = huRankings.map((listing, place) => {
        return (
          <PlayerRanking name = {listing[0]} ranking = {listing[1]} place = {place + 1} school = {listing[2]}/>
        )
      })
      return (
        <div id = 'LadderListingsContainer'>
          Top Individuals
          <IndividualsHUHeader/>
          <div id = 'LadderListings'>

            {huRankingsList}
          </div>
        </div>
      )
    }
  }
}

const ListingsContainer = connect(mapStateToProps)(RawListingsContainer);

export default ListingsContainer;