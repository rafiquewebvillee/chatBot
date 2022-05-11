import logo from './logo.svg';
import './App.scss';
import ChatBoat from './ChatBot';
import { useState } from 'react';
import { Animated } from "react-animated-css";
import ChatIcon from "./Assets/Images/chaticon.png"
import CloseIcon from "./Assets/Images/close-icon.png"

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
       <img alt="chatIcon" src={ChatIcon} className={`chatImg ${chatBotShow ? "" : "show"}`} />
       <img alt="chatIcon" src={CloseIcon} className={`chatImg ${chatBotShow ? "show" : ""}`} />
      </div>
      <ChatBoat animation={animation} setAnimation={setAnimation} chatBotShow={chatBotShow} setChatBoatShow={setChatBoatShow} />
    </div>
  );
}

export default App;
