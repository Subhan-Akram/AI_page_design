import * as React from "react";
import "./App.css";
import btn1 from "./components/images/btn1.svg"
import btn2 from "./components/images/btn2.svg"
import btn3 from "./components/images/btn3.svg"
// import btn4 from "./components/images/btn4.svg"
// import btn5 from "./components/images/btn5.svg"
import btn_logo from "./components/images/btn_logo.png"
import CodeCard from "./components/code-card/CodeCard";

const App = () => {
  let arr=[{title:"Explain Code",icon:btn1},
  {title:"Regex",icon:btn1},
  {title:"Convert Code",icon:btn3},
  {title:"Fix Grammar",icon:btn1},
  {title:"Todo",icon:btn3},

]
  return (
    <div className="homepage">
 <div className="container_menu bd_yellow">

 <div className="container_menu">
 <div> 
  <h1>SJK</h1>
  </div>
 <div className="links"> 
<div >
<h1>Home Page </h1>
  </div>
   <div>
      <h1>blogs</h1>
   </div>
   <div>
    <h1> Contact Us</h1>
   </div>
</div>
   <div className="humberg" onClick={()=>{}}>
       <div className="humberg_icon"></div>
       <div className="humberg_icon"></div>
       <div className="humberg_icon"></div>
   </div>
 </div>
 <br />
 </div>
     <div className="container bd_red">
        {[1,2,3,4,5].map(val=>{
          return <div><button className="btn bd_blue">My Hello World !</button></div>
        })}

     </div>
     <br />
    <div className="container bd_red">
    <CodeCard />
    </div>
     <div className="container bd_red">
  
        {arr.map(val=>{
          return(
            <button className="btn_p bd_blue">
          <span className="btn_img bd_red"><img style={{width:"100%",height:"100%"}} src={val.icon}></img></span>
           {val?.title}
            </button>
          )
        })}
        <div className="bd_blue btn_logo"><img style={{width:"100%",height:"100%"}}  src={btn_logo}></img></div>
       
     </div>
     <div className="w">
        <div className="w1">box1</div>
        <div className="w1 ">box1</div>
        <div className="w1 w2">box1</div>
     </div>
    </div>
  );
};
export default App;
