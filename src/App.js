import logo from './logo.svg';
import './App.scss';
import ChatBoat from './ChatBot';
import { useState } from 'react';
import { Animated } from "react-animated-css";

function App() {
  const[chatBotShow, setChatBoatShow] = useState("")
  const clickChat = () => {
    //console.log("Clicked")
    setChatBoatShow(!chatBotShow)
  }
  return (
    <div className="App">
      <div className='buttonChat' onClick={()=> clickChat() }>
          <h1>Test</h1>
      </div>
      {/* <Animated animationIn="fadeInUp" animationInDuration={1000} animationInDelay={1000} animationOut="fadeOut" isVisible={true}> */}
    {/* <div>
        hello world ;)
    </div> */}
{/* </Animated> */}
      
      <ChatBoat chatBotShow={chatBotShow} setChatBoatShow={setChatBoatShow}/>
    </div>
  );
}

export default App;
