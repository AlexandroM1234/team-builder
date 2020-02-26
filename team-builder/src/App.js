import React, { useState } from "react";
import "./App.css";
import TeamMembers from "./Components/TeamMembers";
import MemberForm from "./Components/MemberForm";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Bobby",
      email: "genricemail@email.com",
      role: "Lead"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  return (
    <div className="App">
      <h1>The Team Members</h1>
      <MemberForm addNewMember={addNewMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
