import React from 'react'
import "./BtnRow.css"
import msg from "../images/cardmsg.png"
function BtnRow() {
  let arr=[1,2,3]
  return (
    <div className='btn_row bd_yellow'>
    <div className='btn_col'>
      <button>
        <div className='btn_col_img'><img src={msg}></img></div>
            <div className='btn_col_content bd_green'>
            <p className='btn_col_text_sm'>Content</p>
              <p className='btn_col_title'>Explain Code</p>
              <p className='btn_col_text'>Explain some code based on the syntax provided</p>
            </div>
              </button></div>
              <div className='btn_col'>
      <button>
        <div className='btn_col_img'><img src={msg}></img></div>
            <div className='btn_col_content bd_green'>
            <p className='btn_col_text_sm'>Content</p>
              <p className='btn_col_title'>Explain Code</p>
              <p className='btn_col_text'>Explain some code based on the syntax provided</p>
            </div>
              </button></div>
   

  </div>
  )
}

export default BtnRow