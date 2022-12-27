import React from 'react'
import "./CodeCard.css"
import msg from "../images/cardmsg.png"
import left_btn_logo from "../images/left_btn_logo.png";
import bullet from "../images/bullet.png"
import bulletLg from "../images/bullet_lg.png"
import card_r_logo from "../images/card_right_btn_logo.png"

function CodeCard() {
  let arr=[{title:"The code above is a function definition.",
  icon:bullet},
  {title:'It defines a new function called `HelloWorld` that  takes a single argument called text`',
  icon:bullet},
  {title:"The body of the function is a single line of code that prints out the value of `text` if it is defined, or `Hello World` if it is not defined.",
  icon:bullet},
  
]
  return (
    <div className='code_card bd_yellow'>
         <div className='code_card_left bd_blue'> 
            <div className='card_left_div bd_green'><img src={msg}></img><h3>Explain Code</h3></div>
            <p className='card_text'>Explain some code based on the syntax provided</p>
            <p className='card_left_bold_text'>Paste your code below:</p>
            <div className='code_block'>
            function <span className='red'>HelloWorld</span>(text)<br />
    &nbsp;&nbsp;echo text || <span className='gr'>"Hello World"</span>; 

            </div>
            <div className='code_btn'><button><img src={left_btn_logo}></img>Enhance with AI</button></div>
         </div>
         
         
         
         <div className='code_card_right'>
           <div className='card_left_div'><div className='round_div'><img src={bulletLg}></img></div><h3>What does this code do?</h3></div>
           <p className='card_text'>The following code does:</p>
       {arr.map(val=>{
        return(
          <div className='card_right_list'>
          <div>  <img 
            src={val.icon}></img></div>
           <div> <p className='card_right_text_b'>{val.title}</p>
           <hr ></hr>
           </div>
            
            </div>
        )
       })}
         <div className='code_right_btn'><button ><img src={card_r_logo}></img>Copy Output</button></div>
         </div>
      </div>
  )
}

export default CodeCard