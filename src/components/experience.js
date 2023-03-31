// import React, { useState } from "react";
// import "./main.css";

// function ExperienceField(props) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [companyName, setCompanyName] = useState("");
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     setIsEditing(false);
//     props.onSave({
//       companyName,
//       title,
//       date,
//     });
//   };

//   const handleCancelClick = () => {
//     setIsEditing(false);
//   };

//   return (
//     <div className="experience-card">
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={companyName}
//             onChange={(e) => setCompanyName(e.target.value)}
//             placeholder="Enter company name"
//           />
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter title"
//           />
//           <input
//             type="text"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             placeholder="Enter date"
//           />
//           <button onClick={handleSaveClick}>Save</button>
//           <button onClick={handleCancelClick}>Cancel</button>
//         </>
//       ) : (
//         <>
//           <div className="card-info">
//             <div className="card-details">
//               <div className="card-item">
//                 <span>Company Name:</span>
//                 <span>{companyName}</span>
//               </div>
//               <div className="card-item">
//                 <span>Title:</span>
//                 <span>{title}</span>
//               </div>
//               <div className="card-item">
//                 <span>Date:</span>
//                 <span>{date}</span>
//               </div>
//             </div>
//             <div className="card-buttons">
//               <button onClick={handleEditClick}>Edit</button>
//               {props.index === props.length - 1 && props.length > 1 ? (
//                 <button onClick={props.onDelete}>Delete</button>
//               ) : null}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// function ExperienceInformation() {
//   const [experiences, setExperiences] = useState([]);

//   const handleAddExperience = () => {
//     setExperiences([
//       ...experiences,
//       {
//         companyName: "",
//         title: "",
//         date: "",
//       },
//     ]);
//   };

//   const handleSaveExperience = (index, experience) => {
//     const newExperiences = [...experiences];
//     newExperiences[index] = experience;
//     setExperiences(newExperiences);
//   };

//   const handleDeleteExperience = (index) => {
//     const newExperiences = [...experiences];
//     newExperiences.splice(index, 1);
//     setExperiences(newExperiences);
//   };

//   return (
//     <div className="container">
//       <div className="info-section">
//         <h2>Experience</h2>
//         <div className="experience-details">
//           {experiences.map((experience, index) => (
//             <ExperienceField
//               key={index}
//               index={index}
//               length={experiences.length}
//               onSave={(experience) => handleSaveExperience(index, experience)}
//               onDelete={() => handleDeleteExperience(index)}
//               {...experience}
//             />
//           ))}
//         </div>
//         <button onClick={handleAddExperience}>Add Experience</button>
//       </div>
//     </div>
//   );
// }

// export { ExperienceField, ExperienceInformation };
import React, { useState } from "react";
import "./main.css";

function ExperienceInformation() {
  const [experienceList, setExperienceList] = useState([]);

  const handleAddClick = (e) => {
    e.preventDefault(); // prevent form submission
    const company = e.target.elements.company.value;
    const jobRole = e.target.elements.jobRole.value;
    const joiningDate = e.target.elements.joiningDate.value;
    const newExperienceList = [
      ...experienceList,
      { company, jobRole, joiningDate },
    ];
    setExperienceList(newExperienceList);
    e.target.reset(); // clear form fields
  };

  const handleDeleteClick = (index) => {
    const newExperienceList = [...experienceList];
    newExperienceList.splice(index, 1);
    setExperienceList(newExperienceList);
  };

  return (
    <div className="container">
      <h2>Experience Information</h2>
      {experienceList.map((experience, index) => (
        <div key={index} className="card">
          <div className="card-content">
            <div className="card-item">
              <span>Company:</span>
              <span>{experience.company}</span>
            </div>
            <div className="card-item">
              <span>Job Role:</span>
              <span>{experience.jobRole}</span>
            </div>
            <div className="card-item">
              <span>Date of Joining:</span>
              <span>{experience.joiningDate}</span>
            </div>
          </div>
          <div className="card-actions">
            <button onClick={() => handleDeleteClick(index)}>Delete</button>
          </div>
        </div>
      ))}
      <div className="card">
        <form onSubmit={handleAddClick}>
          <div className="card-content">
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
            />
            <input type="text" name="jobRole" placeholder="Enter job role" />
            <input
              type="text"
              name="joiningDate"
              placeholder="Enter date of joining"
            />
          </div>
          <div className="card-actions">
            <button type="submit">Add Experience</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExperienceInformation;
