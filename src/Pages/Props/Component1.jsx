function Component1({users}) {
  // get api
  // post api
  // put api or patch api
  // delelte
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <div style={{ height: "300px", width: "200px" }}>
          <h1 style={{ textAlign: "center", fontSize: "30px" }}>
            {props.title}{" "}
          </h1>
          <img src={props.img} alt="" />
          <p>{props.desc}</p>
        </div> */}
      </div>

      <div>
        {users.map((user) => {
          return (
            <>
              <h1>{user.name} </h1>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Component1;
