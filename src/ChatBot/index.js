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
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={700} animationInDelay={800} animationOut="fadeOut" isVisible={true}>
              <h2 className="assistance_name">IRIS</h2>
            </Animated>
            <Animated  className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={900} animationInDelay={900} animationOut="fadeOut" isVisible={true}>
              <h4 className="assistanceGreeting">
                Hello <img className="ml-7" src="../Assets/Images/hand.png" alt="svg" />
              </h4>
            </Animated>
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={1000} animationInDelay={1000} animationOut="fadeOut" isVisible={true}>
            <p className="intro_assistance">
              I am Iris, a Virtual Assistant
              <br />
              How may I help you?
            </p>
            </Animated>
            
          </div>
          <div div className="bodyChat_inner">
             <Animated className={props.animation ? "fadeInUp" : ""}  animationIn="" animationInDuration={1300} animationInDelay={1100} animationOut="fadeOut" isVisible={true}>
             <img
              className="assistanceIcon"
              src="../Assets/Images/assistance.png"
            />
            </Animated>
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn="" animationInDuration={1300} animationInDelay={1100} animationOut="fadeOut" isVisible={true}>
             <p className="classFreq">Frequently Asked Questions <img alt="question" src="../Assets/Images/questionMark.png" /></p>
            </Animated>
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={1400} animationInDelay={1200} animationOut="fadeOut" isVisible={true}>
              <div className="inputFreq">
                <input type="radio" className="inputRadio" name="freqQusetion" />
                <label>Can I redeem my FB before the original term?</label>
              </div>
            </Animated>
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={1600} animationInDelay={1300} animationOut="fadeOut" isVisible={true}>
              <div className="inputFreq">
                <input type="radio" className="inputRadio" name="freqQusetion" />
                <label>How do I pay my Credit card bill?</label>
              </div>
            </Animated>
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={1800} animationInDelay={1400} animationOut="fadeOut" isVisible={true}>
              <div className="inputFreq">
                <input type="radio" className="inputRadio" name="freqQusetion" />
                <label>How can I get my Account Statement?</label>
              </div>
            </Animated>
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={2000} animationInDelay={1500} animationOut="fadeOut" isVisible={true}>
              <div className="inputFreq">
                <input type="radio" className="inputRadio" name="freqQusetion" />
                <label>What is the tenure of Fixed Deposit?</label>
              </div>
            </Animated>
            <Animated className={props.animation ? "fadeInUp" : ""}  animationIn=""  animationInDuration={2500} animationInDelay={2500} animationOut="fadeOut" isVisible={true}>
              <button className="btn btn-white"><img src="../../Assets/Images/chatStart.png" alt="start Chat" />Start a New Conversation</button>
            </Animated>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBoat;
