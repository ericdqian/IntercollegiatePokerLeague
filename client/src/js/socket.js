import openSocket from 'socket.io-client';
import vars from '../vars';

export const makeSocket = () => {
  return openSocket(vars.protocol + '://' + vars.serverEndpoint + ':' + vars.port, { reconnection: true });// to make adaptable

}
