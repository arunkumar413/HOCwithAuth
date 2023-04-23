import { useState } from "react";

export const WithAuth = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <>
      <button onClick={() => setLoggedIn(true)}>Login</button>
      <button onClick={() => setLoggedIn(false)}>Logout</button>
      {isLoggedIn ? <div>{children}</div> : <h2>Please login</h2>}
    </>
  );
};
