import * as React from "react";
import "./App.css";
import btn1 from "./components/images/btn1.svg"
import btn2 from "./components/images/btn2.svg"
import btn3 from "./components/images/btn3.svg"
// import btn4 from "./components/images/btn4.svg"
// import btn5 from "./components/images/btn5.svg"
import btn_logo from "./components/images/btn_logo.png"
import signup from "./components/images/signup.png"
import CodeCard from "./components/code-card/CodeCard";
import BtnRow from "./components/buttons_row_content/BtnRow";
import pattern  from "./components/images/pattern.svg"
import blueCircle  from "./components/images/blue_circle.png";
import Navbar from "./components/Header/Header";

const App = () => {
  let arr=[{title:"Explain Code",icon:btn1},
  {title:"Regex",icon:btn1},
  {title:"Convert Code",icon:btn3},
  {title:"Fix Grammar",icon:btn1},
  {title:"Todo",icon:btn3},

]

  return (
    <div className="homepage">
    <Navbar />
 
    
    <div className="container bd_red mt_4">
    <CodeCard />
    </div>
    <div className="btn_list">
      <div className="pattern"><img src={pattern}></img></div>
      <div className="blue_circle"><img src={blueCircle}></img></div>
    <div className="container con bd_red">
  
  {arr.map(val=>{
    return(
      <button className="btn_p bd_blue">
    <span className="btn_img bd_red"><img style={{width:"100%",height:"100%"}} src={val.icon}></img></span>
     {val?.title}
      </button>
    )
  })}
 
  <div className="bd_blue btn_logo">
    <img style={{width:"100%",height:"100%"}}  src={btn_logo}></img>

  </div>
  
 
</div>
<div className="container_bottom bd_red">

    <div className="bd_red box box1">Examples of AI for Programming</div>
    <div className="bd_red box box2">Examples of AI for Programming</div>
    <div className="bd_red box box3">Powered By</div>

  </div>
  <br /><br />
         <div className="container center bd_red">
              <button className="signup"><img src={signup}></img>Free Signup</button>

         </div>
         
         <div className="ai_content bd_yellow">
          <div className="ai_content_title"> <p>Use the latest AI features</p></div>
           <div className="ai_content_text"><p>Start enhancing a range of tasks using AI, from writing emails, code, or blogs, to rephrasing paragraph’s you just want to reword!</p></div>
         </div>

         <div className="ai_content mb_2">
         {[1,2,3].map(val=>{
          return(
            <BtnRow />
     
          )
         })}

         </div>
         
    </div>



    </div>
  );
};
export default App;
