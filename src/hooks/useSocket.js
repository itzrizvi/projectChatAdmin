import { io } from "socket.io-client";

// Declaring Socket server URL
const socket = io("http://localhost:5000/");

export default socket;
