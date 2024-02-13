import './App.css'
import io from 'socket.io-client';
import {useEffect, useState} from "react";

const socket = io.connect("http://localhost:3001");
function App() {

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [roomId, setRoomId] = useState("");

  // The Fourth step is to listen for the message from the server
  useEffect(() => {
    socket.on('receive_message', (msg) => {
      setMessageReceived(msg.message);
    });
  }, [socket]);

  // The First step is to send a message to the server
  function handleSend() {
    socket.emit('send_message', { message });
  }

  return (
    <>
      <h1>
        Room Id <input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="Enter room #id"/>
      </h1>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type message..."/>
      <button onClick={handleSend}>Send</button>
      <h1>Message: {messageReceived}</h1>
    </>
  )
}

export default App