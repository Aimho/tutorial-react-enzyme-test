import React from "react";
import Profile from "./components/Profile";
import HookCounter from "./components/HookCounter";

function App() {
  return (
    <div>
      <Profile userName="AimHo" name="조준호" />
      <HookCounter />
    </div>
  );
}

export default App;
