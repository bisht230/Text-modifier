import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("");
  //   setText("Hello!"); correct way to set the text
  const handleUpClicking = () => {
    // console.log("Blue button is clicked "+text);
    let newText = text.toUpperCase();
    setText(newText);
    if(text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0){
      props.showAlert("Please enter the text !!","danger");
    }
    else{
    props.showAlert("Converted to UPPER CASE !!","success");
    }
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleLowClicking = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if(text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0){
      props.showAlert("Please enter the text !!","danger");
    }
    else{
    props.showAlert("Converted to lower case !!","success");
    }
  };
  const handleInverseClicking = () => {
    const length = text.length;
    let newText = "";
    for (let i = 0; i < length; i++) {
      if (text.charAt(i) === text.charAt(i).toUpperCase()) {
        newText += text.charAt(i).toLowerCase();
      } else if (text.charAt(i) === text.charAt(i).toLowerCase()) {
        newText += text.charAt(i).toUpperCase();
      } else {
        newText += " ";
      }
    }
    // console.log(newText);
    setText(newText);
    if(text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0){
      props.showAlert("Please enter the text !!","danger");
    }
    else{
    props.showAlert("Converted to iNvErse CaSe !!","success");
    }

  };
  const handleAlterClicking = () => {
    const length = text.length;
    let newText = "";
    for (let i = 0; i < length; i++) {
      if (i % 2 === 0) {
        newText += text.charAt(i).toLowerCase();
      } else if (i % 2 === 1) {
        newText += text.charAt(i).toUpperCase();
      }
    }
    setText(newText);
    if(text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0){
      props.showAlert("Please enter the text !!","danger");
    }
    else{
    props.showAlert("Converted to aLtErNaTiNg cAsE !!","success");
    }

  };
  const handleTitleClicking = () => {
    let arr = text.split(" ");
    let newtext = "";
    for (let i = 0; i < arr.length; i++) {
      let ref = arr[i];
      let reftext = "";
      for (let j = 0; j < ref.length; j++) {
        if (j === 0) {
          reftext += ref.charAt(j).toUpperCase();
        } else {
          reftext += ref.charAt(j).toLowerCase();
        }
      }
      if (i !== arr.length - 1) {
        newtext += reftext + " ";
      } else {
        newtext += reftext;
      }
    }
    setText(newtext);
    if(text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0){
      props.showAlert("Please enter the text !!","danger");
    }
    else{
    props.showAlert("Converted to Title Case !!","success");
    }

  };
  const handleSentenceClicking = () => { // handling sentence Case button function
    let newtext = "";
    let arr = text.split(" ");
    const length = arr.length;
    for (let i = 0; i < length; i++) {
      let reftext = "";
      let ref = arr[i];
      for (let j = 0; j < ref.length; j++) {
        if (i === 0 && j === 0) {
          reftext += ref.charAt(j).toUpperCase();
        } else {
          reftext += ref.charAt(j).toLowerCase();
        }
      }
      if (i !== length - 1) {
        newtext += reftext + " ";
      } else {
        newtext += reftext;
      }
    }
    setText(newtext);
    if(text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0){
      props.showAlert("Please enter the text !!","danger");
    }
    else {
    props.showAlert("Converted to Sentence Case !!","success");
    }

  };
  const handleClearClicking = () => {
    let newText = "";
    setText(newText);
    if(text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0){
      props.showAlert("Please enter the text !!","danger");
    }
    else{
    props.showAlert("Text cleared !!","success");
    }
  };
  return (
    <>
      <div className="container">
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            <h5 className={`text-${props.mode==='light' ? 'dark':'light'}`}>{props.heading}</h5>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{backgroundColor:props.mode==='dark' ? 'grey':'white',color:props.mode==='dark'  ? 'white' : '#042743'}}
          ></textarea>
        </div>
        <button
          className="btn btn-primary btn-sm my-2 mx-1"
          onClick={handleUpClicking}
        >
          UPPER CASE
        </button>
        <button
          className="btn btn-primary btn-sm my-2 mx-1"
          onClick={handleLowClicking}
        >
          lower case
        </button>
        <button
          className="btn btn-primary btn-sm my-2 mx-1"
          onClick={handleInverseClicking}
        >
          iNvErse CaSe
        </button>
        <button
          className="btn btn-primary btn-sm my-2 mx-1"
          onClick={handleAlterClicking}
        >
          aLtErNaTiNg cAsE
        </button>
        <button
          className="btn btn-primary btn-sm my-2 mx-1"
          onClick={handleTitleClicking}
        >
          Title Case{" "}
        </button>
        <button
          className="btn btn-primary btn-sm my-2 mx-1"
          onClick={handleSentenceClicking}
        >
          Sentence Case{" "}
        </button>
        <button
          className="btn btn-primary btn-sm my-2 mx-1"
          onClick={handleClearClicking}
        >
          Clear{" "}
        </button>
      </div>
      <div className="container my-4">
        <h4 className={`text-${props.mode==='light' ? 'dark':'light'}`}>Your text summary</h4>
        <p className={`text-${props.mode==='light' ? 'dark':'light'}` }>
          {/* {text.length===0 ? 0 :  text.split(" ").length}  */}
          <strong>{text.length===0 ? 0 : text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words </strong> and <strong>{text.length} Characters</strong>
        </p>
        <p className={`text-${props.mode==='light' ? 'dark':'light'}`}>It will take {0.008 * text.split(" ").length} sec to read</p>
        <h4 className={`text-${props.mode==='light' ? 'dark':'light'}`}>Preview</h4>
        <p className={`text-${props.mode==='light' ? 'dark':'light'}`}>{text}</p>
      </div>
    </>
  );
}// filter will return boolean types
