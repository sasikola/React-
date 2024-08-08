import React from "react";

function Component1(props) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ height: "300px", width: "200px" }}>
          <h1 style={{ textAlign: "center", fontSize: "30px" }}>
            {props.title}{" "}
          </h1>
          <img
            src={props.img}
            alt=""
          />
          <p>
           {props.desc}
          </p>
        </div>
      </div>
    </>
  );
}

export default Component1;
