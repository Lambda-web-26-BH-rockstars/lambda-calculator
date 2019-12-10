import React, {useState} from "react";
import "./App.css";
import data from './data.js'
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display.js'
import ButtonList from './components/ButtonComponents/Buttons/ButtonList.js'


function App() {
  console.log(data)
  const [display, setDisplay] = useState(0)

  let clickHandler = (buttonName) => {
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
        <ButtonList 
          brians={data.brians} 
          clickHandler={clickHandler} 
        />
      </div>
    </div>
  );
}

export default App;
