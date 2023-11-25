// Shared web socket
import io from "socket.io-client";

// const ENDPOINT = 'http://localhost:5000/'
const ENDPOINT =
  "https://zookilla-npat-dfa754f96096.herokuapp.com/";
const socket = io(ENDPOINT);

export { socket };
