import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked"+text);
        let newText  = text.toUpperCase();
        settext(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowClick = ()=>{
       
        let newText  = text.toLowerCase();
        settext(newText);
        props.showAlert("Converted to lowercase", "success");

    }
    const handleClearClick = ()=>{
       
        let newText  = '';
        settext(newText);
        props.showAlert("Cleared", "success");

    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        settext(event.target.value);
    }

    const handleCopy =()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");

    }
    const [text, settext] = useState('');
    
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >UpperCase</button> 
            <button className="btn btn-primary mx-3" onClick={handleLowClick} >LowerCase</button> 
            <button className="btn btn-primary " onClick={handleClearClick} >Clear</button> 
            <button className="btn btn-primary mx-3" onClick={handleCopy} >Copy</button> 
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * (text.split(" ").length-1)} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
        </div>
        </>
    )
}
