import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./HomeStyle/Home.css";

const HomePage = ({ user }) => {
  const [profilePicture, setProfilePicture] = useState(
    user?.profilePicture || "https://via.placeholder.com/150"
  );

  const navigate = useNavigate(); // Define navigate

  // Função para lidar com o upload da imagem
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result); // Atualiza a imagem exibida
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="home-page">
      <div className="welcome-section">
        <div className="profile-container">
          <div className="profile-picture-wrapper">
            <img
              src={profilePicture}
              alt="Profile"
              className="profile-picture"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="upload-input"
            />
          </div>
        </div>
        <div className="welcome-message">
          <h1>Welcome, {user?.name || "User"}!</h1>
          <p>
            We're thrilled to have you here. Explore the features, track your
            progress, and customize your experience.
          </p>
        </div>
      </div>

      <div className="info-section">
        {/* Primeiro card como link para um blog */}
        <a
          href="https://example-blog.com"
          target="_blank"
          rel="noopener noreferrer"
          className="info-card link-card"
        >
          <h3>Explore Investment Tips</h3>
          <p>
            Click here to read articles that will guide you in your financial
            journey.
          </p>
        </a>

        {/* Segundo card com barra de progresso */}
        <div className="info-card">
          <h3>Your Financial Goal Progress</h3>
          <p>You're at 65% of your savings goal!</p>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "65%" }}></div>
          </div>
        </div>

        {/* Terceiro card com navegação real */}
        <div className="info-card">
          <h3>Quick Actions</h3>
          <div className="actions">
            <button onClick={() => navigate("/faq")}>FAQ</button>
            <button onClick={() => navigate("/settings")}>Settings</button>
            <button onClick={() => navigate("/logout")}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
