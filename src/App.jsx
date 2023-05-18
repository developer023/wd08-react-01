import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";

import { UserContext } from "./context/user/userContext";

import { router } from "./routes/router";

function App() {
  const [user, setUser] = useState({
    name: "John",
    surname: "Doe",
    age: 25,
    email: "john25@gmail.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
