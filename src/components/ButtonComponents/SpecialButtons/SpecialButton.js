import React from "react";

const SpecialButton = (bananaButton) => {
  console.log(bananaButton)

  return (
    <>
      <button 
        className="button"
        onClick={
          () => bananaButton.clickHandler(bananaButton.buttonName)
        }
      >
        {bananaButton.buttonName}
      </button>
    </>
  );
};

export default SpecialButton
