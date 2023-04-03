import React, { useState } from "react";
import "./main.css";

function Achievements() {
  const [achievementList, setAchievementList] = useState([]);

  const handleAddClick = (e) => {
    e.preventDefault(); // prevent form submission
    const newAchievement = e.target.elements.newAchievement.value;
    const newAchievementList = [...achievementList, newAchievement];
    setAchievementList(newAchievementList);
    e.target.reset(); // clear form fields
  };

  const handleDeleteClick = (index) => {
    const newAchievementList = [...achievementList];
    newAchievementList.splice(index, 1);
    setAchievementList(newAchievementList);
  };

  return (
    <div className="container">
      <h2>Achievements</h2>
      {achievementList.length > 0 ? (
        <ul>
          {achievementList.map((achievement, index) => (
            <li key={index}>
              {achievement}{" "}
              <button
                className="delete-btn"
                onClick={() => handleDeleteClick(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No achievements added yet.</p>
      )}
      <div className="info-section">
        <h3>Add Achievement</h3>
        <form onSubmit={handleAddClick}>
          <div className="info-details">
            <div className="info-item">
              <input type="text" name="newAchievement" required />
            </div>
          </div>
          <div className="info-actions">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Achievements;
