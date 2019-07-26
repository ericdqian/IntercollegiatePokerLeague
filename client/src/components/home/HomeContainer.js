import React from "react";
import Navbar from '../navbar/Navbar';
import TestButton from './TestButton';
import vars from '../../vars';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    fetch(vars.protocol + '://' + vars.serverEndpoint + ':' + vars.port + '/api/users/loggedin', {withCredentials: true, credentials: 'include'}, {
    })
    .then(response => response.json())
    .then(data => {
      if (!data.loggedIn) {
        this.props.history.push("/login");
      }
    });
  }

  render() {
    return(
      <div>
        <Navbar {...this.props}/>
        <TestButton/>
      </div>
    )
  }
}

export default HomeContainer;
