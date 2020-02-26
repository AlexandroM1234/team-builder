import React, { useState } from "react";

const MemberForm = props => {
  const [teamMembers, setTeamMembers] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    setTeamMembers({ ...teamMembers, [e.target.name]: e.target.value });
  };

  const formSubmit = e => {
    e.preventDefault();
    props.addNewMember(teamMembers);
    setTeamMembers({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">Member Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={handleChanges}
        placeholder="name"
        value={teamMembers.name}
      />
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChanges}
        placeholder="email"
        value={teamMembers.email}
      />
      <input
        id="role"
        name="role"
        type="role"
        onChange={handleChanges}
        placeholder="role"
        value={teamMembers.role}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;
