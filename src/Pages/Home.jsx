import React, { useEffect, useState } from "react";
import axios from "axios";
import FormHandlers from "./Events/FormHandlers";

const Home = () => {
  const [users, setUsers] = useState([]);
  // fetch
  // 2 then methods
  // 1. then --> to convert the data into json
  // 2. then --> to display the data
  // axios

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div>
      {/* props */}
      <div className="flex justify-center gap-2">
        {/* <Component1 users={users} /> */}
      </div>
      {/* parent componet is home */}
      {/* child component are compon1 and compon2 */}

      <FormHandlers />
    </div>
  );
};

export default Home;
