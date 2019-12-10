import React, {useState} from "react";
import "./App.css";
import data from './data.js'
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display.js'
import SpecialButton from './components/ButtonComponents/SpecialButtons/SpecialButton.js'
import OperatorButton from './components/ButtonComponents/OperatorButtons/OperatorButton.js'
import NumberButton from './components/ButtonComponents/NumberButtons/NumberButton'

function App() {
  console.log(data)
  const [display, setDisplay] = useState(0)

  let specialClickHandler = (buttonName) => {
    console.log(buttonName)
    setDisplay(buttonName)
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display 
          horribleDisplayDefaultedToZero={display}
        />
        <section className="buttonContainer">
          {
            data.specials.map(x=>{
              return (
                <SpecialButton 
                  buttonName={x}
                  clickHandler={specialClickHandler}
                />
              )
            })
          }
          <OperatorButton
            buttonName={data.operators[0].char}
            clickHandler={specialClickHandler}
          />
          {
            data.numbers.map((x, i) => {
              return (
                <NumberButton 
                  buttonName={x}
                  clickHandler={specialClickHandler}
                />
              )
            })
          }
        </section>
      </div>
    </div>
  );
}

export default App;
