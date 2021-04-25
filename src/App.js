import './App.css';
import { useState } from 'react';
function App() {

  // This are useState in React 
  let [expression, setExpression] = useState("");
  let [oldExpression, setOldExpression] = useState("");
  let [prev, setPrev] = useState("ANS");

  // Set in Javascript 
  let numerics = new Set(".0123456789");
  let operators = new Set("+-*/%()");
  //This is used to make buttons
  let buttons = ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', '*', '3', '2', '1', '-', '0', '.', '=', '+'];
  
  let evaluateExpression = function() {
    let evaluation = eval(expression);
    setOldExpression(expression + "=");
    setExpression(String(evaluation));
    setPrev("ANS");
  }
  let putNumerics = function(value) {
    if(prev == "ANS"){
      setOldExpression("Ans = " + expression);
      setExpression(value);
    }else{
      setExpression(expression + value);
    }
    setPrev("NUM");
  }
  let putOperator = function(value) {
    if(prev != "OP"){
      setExpression(expression + value);
    }else{
      setExpression(expression.slice(0,-1) + value);
    }
    setPrev("OP");
  }
  let putDelete = function(){
    if(expression.length>=1){
      setExpression(expression.slice(0,-1));
    }
    setPrev("DEL");
  }
  //Used to Handle any keypress event
  let handleKeyup = function(event){
    console.log(event.key);
    if(event.key === "Backspace"){
      putDelete();
    } else if(numerics.has(event.key)){ 
      putNumerics(event.key);
    } else if(operators.has(event.key)){
      putOperator(event.key);
    } else if(event.key === "Enter" || event.key === "="){
      evaluateExpression();
    }
  }

  // We will return this which will be received and rendered by index.js
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
          background: '#fff',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          border: '3px inset black',
          borderRadius: '10px',
          padding: '5px'
        }}>
          {buttons.map(function (buttonValue, idx) {
              return (
                <button
                  style={{
                    width: "90px",
                    padding: "5px",
                    margin: "5px",
                    boxShadow: "2px 3px #999"
                  }}
                  onClick={function () {
                    if (buttonValue == "AC") {
                      putDelete();
                    } else if (numerics.has(buttonValue)) {
                      putNumerics(buttonValue);
                    } else if (operators.has(buttonValue)) {
                      putOperator(buttonValue);
                    } else if (buttonValue === "=") {
                      evaluateExpression();
                    }
                  }}
                >{buttonValue}</button>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
