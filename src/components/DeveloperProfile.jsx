import React from "react";
import "../css/DeveloperProfile.css";

const DeveloperProfile = () => {
  const developerInfo = {
    name: "Nom du Développeur",
    title: "Développeur Full Stack",
    bio: "Description courte du développeur et de ses compétences.",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    github: "https://github.com/nom-utilisateur",
    linkedin: "https://www.linkedin.com/in/nom-utilisateur/",
    // Ajoutez d'autres informations si nécessaire
  };

  return (
    <div className="developer-profile">
      <h1>{developerInfo.name}</h1>
      <h2>{developerInfo.title}</h2>
      <p>{developerInfo.bio}</p>

      <h3>Compétences :</h3>
      <ul>
        {developerInfo.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Liens :</h3>
      <p>
        GitHub: <a href={developerInfo.github}>{developerInfo.github}</a>
      </p>
      <p>
        LinkedIn: <a href={developerInfo.linkedin}>{developerInfo.linkedin}</a>
      </p>
    </div>
  );
};

export default DeveloperProfile;
