import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleReClick = ()=> {
        let eachLetter = text.split("");
        eachLetter = eachLetter.reverse();
        let newText = eachLetter.join("");
        setText(newText);
    }
    const handleCopy = ()=> {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleClearClick = ()=> {
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    return (
        <>
     <div className='container' >
         <h1 style={{color: props.mode==='dark'?'white':'black'}} >{props.heading} </h1>
         <div className="mb-3">
             <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
             <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
             <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
             <button className="btn btn-primary my-3 mx-2" onClick={handleReClick}>Reverse Text</button>
             <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy</button>
             <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
             <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
         </div>
         
     </div>
     <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}> 
        <h2> Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here."}</p>
     </div>
     </>
  )
}
