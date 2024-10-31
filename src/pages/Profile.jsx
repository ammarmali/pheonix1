/* eslint-disable no-unused-vars */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
 // Include custom CSS for enhanced styling

// Mock subscription data for demo purposes (in real case, fetch this from a server)
const subscriptionData = {
  rank: "Pro", // Ranks: 'Basic', 'Pro', 'Elite'
  features: [
    "Access to premium content",
    "Customizable dashboard",
    "Priority support",
    "Exclusive webinars",
  ],
};

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loading">Loading your profile...</div>;
  }

  if (!isAuthenticated) {
    return <div>You need to log in to view this page.</div>;
  }

  // Destructure necessary data from user object
  const { name, email, picture } = user; // user.picture gives the Google profile picture URL
  const currentRank = subscriptionData.rank;

  const rankColors = {
    Basic: "#7D7D7D", // Gray for Basic
    Pro: "#4A90E2",   // Blue for Pro
    Elite: "#FFC300", // Gold for Elite
  };

  const availableRanks = ["Basic", "Pro", "Elite"];

  const handleUpgrade = (newRank) => {
    console.log(`Upgrade to ${newRank}`);
    // Implement redirect to payment gateway here (e.g., Stripe Checkout)
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        {/* Display Google Profile Picture from Auth0 */}
        <img src={picture} alt="Profile" className="profile-picture" />
        <h2 className="profile-name">{name}</h2>
        <p className="profile-email">{email}</p>
      </div>

      <div className="subscription-status">
        <h3>
          Subscription Status:{" "}
          <span style={{ color: rankColors[currentRank] }}>{currentRank}</span>
        </h3>
      </div>

      <div className="subscription-features">
        <h4>Your {currentRank} Benefits:</h4>
        <ul>
          {subscriptionData.features.map((feature, index) => (
            <li key={index}>✔️ {feature}</li>
          ))}
        </ul>
      </div>

      <div className="rank-selection">
        <h4>Upgrade Your Subscription</h4>
        <div className="rank-options">
          {availableRanks.map((rank) => (
            <button
              key={rank}
              className={`rank-button ${rank === currentRank ? "active" : ""}`}
              onClick={() => handleUpgrade(rank)}
              disabled={rank === currentRank}
            >
              {rank}
            </button>
          ))}
        </div>
      </div>

      <div className="rank-explanation">
        {currentRank === "Basic" && <p>Upgrade to unlock more features and premium support.</p>}
        {currentRank === "Pro" && <p>Consider upgrading to Elite for the highest-tier benefits.</p>}
        {currentRank === "Elite" && <p>You re enjoying the top-level access! Thank you for being a premium member.</p>}
      </div>
    </div>
  );
};

export default Profile;
