import React from 'react'
import Button from './Button.js'


const ButtonList = (props) => {
  return(
    <section className="buttonContainer">
      {
        props.brians.map((x, i)=>{
          return (
            <Button
              key={i}
              buttonName={x.name}
              buttonCSS={x.css}
              clickHandler={props.clickHandler}
            />
          )
        })
      }
    </section>
  )
}

export default ButtonList