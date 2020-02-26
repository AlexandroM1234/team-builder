import React from "react";

const TeamMembers = props => {
  return (
    <div>
      {props.teamMembers.map(member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
