import React, { useState } from 'react'


export default function TextForm(props) {
 
  const HandleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value)
    }

  const HandleUpClick = () => {
    // console.log("Uppercase Click");
    let newText = text.toUpperCase()
    setText(newText)
    
  }
  const toggle = () => {
    if (document.body.style.backgroundColor === "black") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      
      document.body.style.color = "white";
    }
  }



  const [text, setText] = useState('Hello, Please Enter Text')

  return (
    <>
    {/* toggle button */}
        <div class="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={toggle}/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
        </div>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" id="myBox" value={text} onChange={HandleOnChange} rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-info" onClick={HandleUpClick}>Convert To Uppercase</button>
        </div>
        <div className="container my-3">
            <h4>Your Text Summary</h4>
            <p>{text.split(" ").length} word , {text.length} characters</p>
        </div>

        
    </>
  )
}

