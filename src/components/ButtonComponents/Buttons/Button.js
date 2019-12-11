import React from "react";

const Button = (bananaButton) => {
  console.log(bananaButton)

  return (
    <button 
      key={bananaButton.id}
      className={`button ${bananaButton.buttonCSS}`}
      onClick={
        () => bananaButton.clickHandler(bananaButton.buttonName)
      }
    >
      {bananaButton.buttonName}
    </button>
  );
};

export default Button