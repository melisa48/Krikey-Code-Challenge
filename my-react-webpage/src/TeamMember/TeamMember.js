import React from 'react';
import './TeamMember.css'; // Assuming TeamMember.css defines styles

const TeamMember = ({ name, email, imageUrl, removeMember }) => {
  // Handle cases where imageUrl is missing or empty (refer to previous explanation)
  const defaultImageUrl = 'https://via.placeholder.com/100'; // Replace with your default image URL
  const imageSrc = imageUrl || defaultImageUrl;

  // Concise alt text that describes the image content
  const altText = `${name}'s Profile Picture`;

  return (
    <div className="team-member">
      <img src={imageSrc} alt={altText} className="profile-picture" />
      <div className="member-info">
        <h3>{name}</h3>
        <p>{email}</p>
        {removeMember && <button className="remove-btn" onClick={removeMember}>X</button>}  {/* Optional remove button */}
      </div>
    </div>
  );
};

export default TeamMember;




