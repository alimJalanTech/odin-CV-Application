import React, { useState } from "react";
import "./main.css";

function GeneralInformation() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="container">
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <div className="info-section">
            <h2>General Information</h2>
            <div className="info-details">
              <div className="info-item">
                <span>Name:</span>
                <span>{name}</span>
              </div>
              <div className="info-item">
                <span>Email:</span>
                <span>{email}</span>
              </div>
              <div className="info-item">
                <span>Phone Number:</span>
                <span>{phoneNumber}</span>
              </div>
            </div>
          </div>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
}

export default GeneralInformation;
