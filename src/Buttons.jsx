import React from "react";

const Buttons = ({filterItem , catItem}) => {
  return (
    <>
      <div className="container1 menu-tabs">
        <div className="d-flex justify-content-around menu-tab">
        {
            catItem.map((currElem,index)=>{
                return <button
            className="btn btn-warning" 
            key={index}
            onClick={() => {
              filterItem(currElem);
            }}
          >
            {currElem}
          </button>
            })
        }
          {/* <button
            className="btn btn-warning"
            onClick={() => {
              setItem(menu);
            }}
          >
            All
          </button> */}
          
    
        </div>
      </div>
    </>
  );
};

export default Buttons;
