import React, { useState, useEffect } from 'react';
import TeamMember from '../TeamMember';
import './TeamList.css';
import placeholderImage from './placeholder.png'; // Add a local placeholder image

const TeamSection = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        // Replace '/api/top-authors' with your actual endpoint
        fetch('/api/top-authors')
            .then(response => response.json())
            .then(data => setTeamMembers(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div className="team-section-container">  <div className="team-section">
            {teamMembers.map(member => (
              <TeamMember
                key={member.name}
                name={member.name}
                email={member.email}
                imageUrl={placeholderImage} 
              />
            ))}
          </div>
        </div>
      );
    };

export default TeamSection;