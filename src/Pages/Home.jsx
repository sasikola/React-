import React from "react";
import Counter from "./Counter";
import ThemeChanger from "./ThemeChanger";
import Component1 from "./Props/Component1";

const Home = () => {
  return (
    <div>
      <h1 className="bg-primary">Home page</h1>
      <button className="btn btn-primary">click</button>
      <Counter />
      <ThemeChanger />

      {/* props */}
      <div className="flex justify-center gap-2">
        <Component1
          title={"Title1"}
          img={
            "https://cdn.pixabay.com/photo/2023/05/28/13/15/helicopter-8023696_640.jpg"
          }
          desc={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisiexcepturi labore, harum praesentium illum non quod sequi enim dicta nihil quas, nostrum ad, delectus alias molestiae nam in nobis eius."
          }
        />
        <Component1
          title={"Title2"}
          img={
            "https://cdn.pixabay.com/photo/2020/07/23/04/35/flyer-5430378_640.jpg"
          }
          desc={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisiexcepturi labore, harum praesentium illum non quod sequi enim dicta nihil quas, nostrum ad, delectus alias molestiae nam in nobis eius."
          }
        />
        <Component1
          title={"Title 3"}
          img={
            "https://cdn.pixabay.com/photo/2015/01/06/14/18/turbine-590354_640.jpg"
          }
          desc={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisiexcepturi labore, harum praesentium illum non quod sequi enim dicta nihil quas, nostrum ad, delectus alias molestiae nam in nobis eius."
          }
        />
      </div>
      {/* parent componet is home */}
      {/* child component are compon1 and compon2 */}
    </div>
  );
};

export default Home;
