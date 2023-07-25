import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" +text);
        let newText= text.toUpperCase();
        setText(newText)
    }

      const handleLoClick = () => {
        console.log("Uppercase was clicked" +text);
        let newText= text.toLowerCase();
        setText(newText)
    }

    const handleCopyClick = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
}

        const handleOnChange =(event) =>{
            console.log("onChange");
            setText(event.target.value)
        }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#24253d'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#24253d'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#24253d'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read </p>
      <h2>Preview</h2>
      <p> {text.length>0?text: "Enter something in the textbox above to preview"} </p>
    </div>
    </>
    
  )
}
