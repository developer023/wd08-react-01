import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";

import { UserContext } from "./context/user/userContext";
import { ErrorContext } from "./context/error/errorContext";

import { router } from "./routes/router";

function App() {
  const [user, setUser] = useState({
    name: "John",
    surname: "Doe",
    age: 25,
    email: "john25@gmail.com",
  });

  const [error, setError] = useState(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </ErrorContext.Provider>
  );
}

export default App;
