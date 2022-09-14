import React from "react";

const MainSection = (props) => {
  return <>
    <div className="mainDiv">
        <div className="subDiv">
          {props.item.map((elem, index) => {
            const { id, name, category, price, image } = elem;
            return (
              <div className="container2" key={id}>
                <div className="img">
                  <img src={image} alt="menu pic" />
                </div>
                <div className="info">
                  <h1>{name}</h1>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
                  <div className="d-flex align-item-center justify-content-between">
                    <h2 className="price">Price : {price}</h2>
                    <a href="#">
                      <button className="btn btn-primary"> Order Now</button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  </>;
};

export default MainSection;
