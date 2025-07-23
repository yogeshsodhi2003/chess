import React,{useEffect, useState} from "react";
import { io } from "socket.io-client";

const App = () => {
  const [connected, setConnected] = useState(false)
  const [socket, setSocket] = useState(null)
  useEffect(() => {
    // Connect to your Socket.IO server
    const socketInstance = io('http://localhost:3000');
    setSocket(socketInstance);

    // Listen for connection events
    socketInstance.on('connect', () => {
      console.log('Connected to server');
      setConnected(true);
    });

    socketInstance.on('disconnect', () => {
      console.log('Disconnected from server');
      setConnected(false);
    });

    // Cleanup on component unmount
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
   <div>
      <h1>Socket.IO React Client</h1>
      <p>Status: {connected ? 'Connected' : 'Disconnected'}</p>
  </div>

)};

export default App;
