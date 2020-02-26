import React, { useState } from "react";
import "./App.css";
import TeamMembers from "./Components/TeamMembers";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Bobby",
      bio: "The quiet one"
    }
  ]);
  return (
    <div className="App">
      <h1>The Team Members</h1>
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
