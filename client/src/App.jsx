import './App.css'
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001");
function App() {

  function handleSend() {
    socket.emit('send_message', { message: 'Hello World' });
    // console.log('Send button clicked')
  }

  return (
    <>
      <input type="text" placeholder="Type message..."/>
      <button onClick={handleSend}>Send</button>
    </>
  )
}

export default App