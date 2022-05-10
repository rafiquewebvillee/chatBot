import logo from './logo.svg';
import './App.scss';
import ChatBoat from './ChatBot';
import { useState } from 'react';
import { Animated } from "react-animated-css";

function App() {
  const [chatBotShow, setChatBoatShow] = useState("")
  const [animation, setAnimation] = useState("")
  const [closeIcon, setCloseIcon] = useState("")
  const clickChat = () => {
    //console.log("Clicked")
    setChatBoatShow(!chatBotShow)
    setAnimation(!animation)
  }
  return (
    <div className="App">
      <div className='buttonChat' onClick={() => clickChat()}>
       <img alt="chatIcon" src="../Assets/Images/chatIcon.png" className='chatImg' />
      </div>
      <ChatBoat animation={animation} setAnimation={setAnimation} chatBotShow={chatBotShow} setChatBoatShow={setChatBoatShow} />
    </div>
  );
}

export default App;
