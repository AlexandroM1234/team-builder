import React from "react";

const TeamMembers = props => {
  console.log(props.teamMembers);
  return (
    <div>
      {props.teamMembers.map(member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <h2>{member.bio}</h2>
        </div>
      ))}
      ;
    </div>
  );
};

export default TeamMembers;
