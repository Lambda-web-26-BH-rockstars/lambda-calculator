import React, {useState} from "react";
import "./App.css";
import data from './data.js'
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display.js'
import Button from './components/ButtonComponents/Buttons/Button.js'

function App() {
  console.log(data)
  const [display, setDisplay] = useState(0)

  let ClickHandler = (buttonName) => {
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
            data.brians.map((x, i)=>{
              return (
                <Button
                  key={i}
                  buttonName={x.name}
                  clickHandler={ClickHandler}
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
