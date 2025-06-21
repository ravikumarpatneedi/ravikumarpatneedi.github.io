import React from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCertificate,
  faChalkboardUser,
  faCheckCircle,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import "./Education.css";

const Education = () => {
  const education = [
    {
      school: "Pragati Engineering College, Surampalem",
      degree: "Bachelor's, Mechanical Engineering",
      period: "Jun 2016 - May 2020",
      courses: [
          "Engineering Mechanics",
          "Thermodynamics",
          "Fluid Mechanics",
          "Strength of Materials",
          "Kinematics of Machinery",
          "Refrigeration and Air Conditioning",
          "Computer-Aided Design (CAD)",
          "C Programming",
      ],
    },
  ];

  const certifications = [
    {
    name: "Microsoft Certified: Azure Fundamentals",
    icon: "fa-certificate",
    },
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      icon: "fa-certificate",
    },
    {
      name: "Microsoft Certified: Azure Developer Associate",
      icon: "fa-certificate",
    },
    {
      name: "Google Cloud Certified: Associate Cloud Engineer",
      icon: "fa-certificate",
    },
  ];

  return (
    <div className="education-container">
      <div className="section-title-container">
        <h2 className="section-title">Education</h2>
      </div>
      <p className="section-subtitle">My Academic Background</p>

      <div className="education-content">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <h3>{edu.school}</h3>
              <span className="education-period">
                <FontAwesomeIcon icon={faCalendarAlt} className="fa-icon" />
                {edu.period}
              </span>
            </div>

            <div className="education-body">
              <div className="degree-container">
                <div className="degree-title">
                  <FontAwesomeIcon icon={faMedal} className="fa-icon" />
                  <h4>{edu.degree}</h4>
                </div>
                {edu.gpa && <span className="gpa">GPA: {edu.gpa}</span>}
              </div>
              <div className="coursework">
                <span className="coursework-title">
                  <FontAwesomeIcon
                    icon={faChalkboardUser}
                    className="fa-icon"
                  />
                  <h5>Coursework:</h5>
                </span>
                <ul>
                  {edu.courses.map((course, i) => (
                    <li key={i}>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="fa-icon"
                      />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="certifications">
        <h3>Certifications</h3>
        <LazyMotion features={domAnimation}>
          <motion.div className="certification-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <FontAwesomeIcon icon={faCertificate} className="fa-icon" />
                <span>{cert.name}</span>
              </div>
            ))}
          </motion.div>
        </LazyMotion>
      </div>
    </div>
  );
};

export default Education;
