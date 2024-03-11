import React,{useState} from 'react'

import './Style.css'

export default function Form(props) {
  const [text,setText]=useState("");
  let sty={
    "backgroundColor":`${props.body}`,
    "color":`${props.body==="white"?"#01071c":"white"}`
  }

  if(props.body==="white"){
    document.body.style.backgroundColor="white"
  }
  else{
    document.body.style.backgroundColor="#01071c"
  }

  function clearText(){
    setText("") 
    props.aler("TEXT CLEAR!!!","Success")
  }


  function upperCase(){
    setText(text.toUpperCase())
    props.aler("Change to upper case","Success")
  }
  const onCange = (event)=>{
    setText(event.target.value)
  }
  const lowerCase = ()=>{
    setText(text.toLowerCase())
    props.aler("Change to lower case","Success")
  } 
    return (
    <div style={sty}>
        <div className="mb-3">
            <h2 className='heading'>Enter Some Text</h2>
            <textarea className="form-control" id="exampleFormControlTextarea1" style={sty} rows="9" value={text} onChange={onCange}>

            </textarea>
            <br/>
            <button disabled={text.length===0}  className="btn btn-primary " onClick={upperCase} >For Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={lowerCase}>For Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2" onClick={clearText} >Clear text</button>
            </div>
            <div className="container">
            <h3>
                Your Text Summary
            </h3>
            There are {text.split(" ").filter((word)=>{return word.length!=0}).length} words and {text.length} alphabets
            </div>
            
    </div>
  )
}
