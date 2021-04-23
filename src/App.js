import './App.css';
import { useState } from 'react';
function App() {
  let [expression, setExpression] = useState("");
  let [oldExpression, setOldExpression] = useState("");
  let numerics = new Set(".0123456789");
  let operators = new Set("+-*/%()");
  let handleOnClick = function(event){
    console.log(event);
    if(event === "Backspace"){
      setExpression(expression.slice(0,-1));
    } else if(event === "="){
      let evaluation = eval(expression);
      setOldExpression(expression);
      setExpression(String(evaluation));
    } else{
      setOldExpression(expression);
      setExpression(expression + event);
    }
  }
  let handleKeyup = function(event){
    console.log(event.key);
    if(event.key === "Backspace"){
      setExpression(expression.slice(0,-1));
    } else if(numerics.has(event.key) || operators.has(event.key)){
      setOldExpression(expression);
      setExpression(expression + event.key);
    } else if(event.key === "Enter" || event.key === "="){
      let evaluation = eval(expression);
      setOldExpression(expression);
      setExpression(String(evaluation));
    }
  }
  return (
    <div className="App" tabIndex={0} onKeyUp={handleKeyup}>
      <div style={{
        width: '100%',
        height: '100vh',
        background: 'darkturquoise',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          width: '400px',
          background: '#fff',
          border: '3px inset black',
          borderRadius: '10px',
          paddingLeft: '10px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <h1 style={{
            color: 'darkturquoise',
            borderBottom: '5px dotted black'
          }}> CALCULATOR </h1>
        </div>

        <div style={{
          width: '400px',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          border: '3px inset black',
          borderRadius: '10px',
          paddingRight: '10px',
          overflow: "hidden",
          color: '#555'
        }}>
          <h6>{oldExpression}</h6>
          <h2>{expression}</h2>
        </div>
        <div style={{
          width: '400px',
          height: '300px',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          border: '3px inset black',
          borderRadius: '10px',
          padding: '5px'
        }}>
          <div style={ rowDesign }>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("("); }}> ( </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick(")"); }}> ) </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("%"); }}> % </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("Backspace"); }}> AC </button>
          </div>
          <div style={ rowDesign }>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("7"); }}> 7 </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("8"); }}> 8 </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("9"); }}> 9 </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("/"); }}> / </button>
          </div>
          <div style={ rowDesign }>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("4"); }}> 4 </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("5"); }}> 5 </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("6"); }}> 6 </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("*"); }}> x </button>
          </div>
          <div style={ rowDesign }>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("1"); }}> 1 </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("2"); }}> 2 </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("3"); }}> 3 </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("-"); }}> - </button>
          </div>
          <div style={ rowDesign }>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("0"); }}> 0 </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("."); }}> . </button>
            <button style={{
              background: '#bdf4ff',
              fontSize: '30px',
              width: '95px'
            }} onClick={ function(){ handleOnClick("="); }}> = </button>
            <button style={ btnStyle } onClick={ function(){ handleOnClick("+"); }}> + </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const btnStyle = {
  fontSize: '30px',
  width: '95px'
}
const rowDesign = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around'
}
export default App;
