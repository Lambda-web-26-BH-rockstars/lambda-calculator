import React, {useState} from "react";
import "./App.css";
import data from './data.js'
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display.js'
import SpecialButton from './components/ButtonComponents/SpecialButtons/SpecialButton'

function App() {
  console.log(data)
  const [display, setDisplay] = useState(0)

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display 
          horribleDisplayDefaultedToZero={display}
        />
        {
          data.specials.map(x=>{
            return (
              <SpecialButton buttonName={x} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
