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
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={100} animationInDelay={100} animationOut="fadeOut" isVisible={true}>
              <h2 className="assistance_name">IRIS</h2>
            </Animated>
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={200} animationInDelay={200} animationOut="fadeOut" isVisible={true}>
              <h4 className="assistanceGreeting">
                Hello <img className="ml-20" src="../Assets/Images/hand.png" alt="svg" />
              </h4>
            </Animated>
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={300} animationInDelay={300} animationOut="fadeOut" isVisible={true}>
            <p className="intro_assistance">
              I am Iris, a Virtual Assistant
              <br />
              How may I help you?
            </p>
            </Animated>
            
          </div>
          <div div className="bodyChat_inner">
            <img
              className="assistanceIcon"
              src="../Assets/Images/assistance.png"
            />
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn="" animationInDuration={400} animationInDelay={400} animationOut="fadeOut" isVisible={true}>
             <p className="classFreq">Frequently Asked Questions <img alt="question" src="../Assets/Images/questionMark.png" /></p>
            </Animated>
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={500} animationInDelay={500} animationOut="fadeOut" isVisible={true}>
              <div className="inputFreq">
                <input type="radio" className="inputRadio" name="freqQusetion" />
                <label>Can I redeem my FB before the original term?</label>
              </div>
            </Animated>
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={600} animationInDelay={600} animationOut="fadeOut" isVisible={true}>
              <div className="inputFreq">
                <input type="radio" className="inputRadio" name="freqQusetion" />
                <label>How do I pay my Credit card bill?</label>
              </div>
            </Animated>
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={700} animationInDelay={700} animationOut="fadeOut" isVisible={true}>
              <div className="inputFreq">
                <input type="radio" className="inputRadio" name="freqQusetion" />
                <label>How can I get my Account Statement?</label>
              </div>
            </Animated>
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={800} animationInDelay={800} animationOut="fadeOut" isVisible={true}>
              <div className="inputFreq">
                <input type="radio" className="inputRadio" name="freqQusetion" />
                <label>What is the tenure of Fixed Deposit?</label>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBoat;
