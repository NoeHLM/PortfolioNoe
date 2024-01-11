import React from "react";
import "../../css/Header.css";

function Homepage() {
    const developerInfo = {
        name: "Noé",
        last_name: "HEY-LE MADEC",
        title: "Développeur Full Stack",
        bio: "Je suis dev.",
        github: "https://github.com/NoeHLM",
        linkedin: "https://www.linkedin.com/in/noe-hey-le-madec-developpeur-informatique-alternance/",
    };
    const menu = {
        projets: "projets",
        contact: "contact"
    }
    return (
        <div className="head">
            <div className="developer-profile">
                <p className="logo">{developerInfo.name}</p>
                <p className="navbar">{menu.projets}</p>
                <p className="navbar">{menu.contact}</p>
                <a className="reseau" href={developerInfo.github}><img src="github-icon.png" alt="GitHub" /></a>
                <a className="reseau" href={developerInfo.linkedin}><img src="linkedin-icon.png" alt="LinkedIn" /></a>
            </div>
            <div className="bio">
                <p className="prenom">{developerInfo.name}</p>
                <p className="nom">{developerInfo.last_name}</p>
                <p className="titre">{developerInfo.title}</p>
            </div>

        </div>
    );
}

export default Homepage;