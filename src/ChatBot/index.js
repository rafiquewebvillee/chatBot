import { Animated } from "react-animated-css";
import "./style.scss";

function ChatBoat(props) {
  console.log(props);
  return (
    <>
      <div
        className={props.chatBotShow ? "chatBotWrapper show" : "chatBotWrapper"}
      >
        <div className="bodyChat">
          <div className="headerChat">
            <h2 className="assistance_name">IRIS</h2>
            <h4 className="assistanceGreeting">
              Hello <img src="../Assets/Images/hand.png" alt="svg" />
            </h4>
            <p className="intro_assistance">
              I am Iris, a Virtual Assistant
              <br />
              How may I help you?
            </p>
          </div>
          <div div className="bodyChat_inner">
            <img
              className="assistanceIcon"
              src="../Assets/Images/assistance.png"
            />
            <p className="classFreq">Frequently Asked Questions <img alt="question" src="../Assets/Images/questionMark.png" /></p>
            <div className="inputFreq">
              <input type="radio" className="inputRadio" name="freqQusetion"/>
              <label>Can I redeem my FB before the original term?</label>
            </div>
            <div className="inputFreq">
              <input type="radio" className="inputRadio" name="freqQusetion"/>
              <label>How do I pay my Credit card bill?</label>
            </div>
            <div className="inputFreq">
              <input type="radio" className="inputRadio" name="freqQusetion"/>
              <label>How can I get my Account Statement?</label>
            </div>
            <div className="inputFreq">
              <input type="radio" className="inputRadio" name="freqQusetion"/>
              <label>What is the tenure of Fixed Deposit?</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBoat;
