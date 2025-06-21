import React, { useState } from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calculateExperience } from "../../utils/date-utils"; 
import {
  faBriefcase,
  faMapMarkerAlt,
  faClock,
  faTrophy,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      company: "Tata Consultancy Services",
      position: "Systems Engineer",
      period: "Dec 2021 - Current",
      location: "Bangalore, India",
      jobType: "Full-time",
      duration: calculateExperience("2021-12-23"),
      summary:
        "Contributed to core banking and digital payment solutions by developing secure, scalable backend systems and APIs across multiple global banking clients.",
      keyPoint: "Developed and maintained financial APIs used across real-time payment systems and reduced manual reconciliation tasks by 40%.",
      achievements: [
        "Built 10+ backend APIs for Central Trust Bank’s core processing and reconciliation systems using Swagger and Mastercraft tools",
        "Reduced booking retry and batch recon time by 35% via optimized shell scripts and SQL logic",
        "Played key role in modernizing CI/CD pipelines using Jenkins Pipelines",
        "Completed 3 Microsoft Azure certifications and 1 GCP cloud certification within 1 year",
        "Ensured 100% on-time delivery across 2 major banking projects with zero rollback incidents",
      ],
      responsibilities: [
        "Worked on API development, backend logic, and batch processing for Central Trust Bank (CTB), focusing on date flip, booking retry, and recon tasks",
        "Collaborated with cross-functional teams to model API contracts using Swagger and streamline banking workflows",
        "Wrote optimized SQL scripts and PostgreSQL procedures to automate Data migration and housekeeping",
        "Used Bash scripting for automation tasks on Linux environments using PuTTY and WinSCP",
        "Implemented CI/CD practices using Jenkins Pipelines, improving deployment speed and reducing manual effort",
        "Created Jasper reports for Audit, Breach, EOD and Limit modules during CIBC project, improving regulatory compliance",
        "Adopted Agile practices with Jira-based sprints and peer reviews for better team velocity and code quality",
      ],
      technologies: [
        "Java",
        "Sql",
        "DB2",
        "Bash",
        "PostgreSQL",
      ]
    },
    {
      company: "Woosu Automotive Inidia Pvt Ltd",
      position: "Graduate Engineer Trainee",
      period: "Nov 2020 - Nov 2021",
      location: "Chennai, India",
      jobType: "Full-time",
      duration: "1 year",
      summary:
        "Supported manufacturing operations and quality control systems by ensuring smooth process flows, data reporting, and production line efficiency in an automotive environment.",
      keyPoint: "Helped reduce production downtime by 20% and improved reporting accuracy through digital logs and Excel automation.",
      achievements: ["Streamlined production monitoring by implementing digital process tracking using Excel macros and logs",
                      "Collaborated with Korean counterparts to troubleshoot and resolve line-level technical issues, improving response time",
                      "Participated in ISO audits and internal process compliance activities with zero non-conformities raised",
                      "Initiated quality checklists and preventive maintenance logs to reduce part rejections",
                    ],
      responsibilities: [
                          "Assisted in production line setup, part quality validation, and troubleshooting for chassis components",
                          "Maintained production records, downtime logs, and shift reports for managerial dashboards",
                          "Generated daily MIS and quality reports using Excel, supporting real-time decision-making for supervisors",
                          "Worked with the maintenance team to resolve equipment errors and participate in root-cause analysis (RCA)",
                          "Helped with supplier coordination and inventory checks to ensure uninterrupted line flow",
      ],
      technologies: [
        "CAD",
        "CNC Programming",
        "MS Excel",
        "ERP modules"
      ]
    },
  ];

  const toggleExpand = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <div className="experience-container">
      <div className="section-title-container">
        <h2 className="section-title">Work Experience</h2>
      </div>
      <p className="section-subtitle">My Professional Journey</p>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-date">{exp.period}</div>
            <LazyMotion features={domAnimation}>
              <motion.div
                className={`timeline-content ${
                  expandedId === index ? "expanded" : ""
                }`}
                onClick={() => toggleExpand(index)}
              >
                <div className="timeline-header">
                  <h3>{exp.position}</h3>
                  <div className="job-type-badge">
                    <FontAwesomeIcon icon={faBriefcase} className="fa-icon" />{" "}
                    {exp.jobType}
                  </div>

                  <div className="company-wrapper">
                    <div className="company-badge">
                      <span>{exp.company}</span>
                    </div>
                    <div className="role-details">
                      <span className="location">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="fa-icon"
                        />{" "}
                        {exp.location}
                      </span>
                      <span className="duration">
                        <FontAwesomeIcon icon={faClock} className="fa-icon" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <div className="summary-wrapper">
                    <p className="job-summary">{exp.summary}</p>
                    <div className="achievement-highlight">
                      <FontAwesomeIcon icon={faTrophy} className="fa-icon" />
                      <span>{exp.keyPoint}</span>
                    </div>

                    <div className="tech-pills">
                      {exp.technologies.slice(0, 5).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 5 && (
                        <span className="tech-pill">
                          +{exp.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className="expand-indicator"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(index);
                  }}
                >
                  <FontAwesomeIcon
                    icon={expandedId === index ? faChevronUp : faChevronDown}
                    className="fa-icon"
                  />
                </div>

                <div className="timeline-body">
                  <div className="achievements">
                    <h4>Key Achievements</h4>
                    <div className="achievements-list">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div className="achievement-item" key={achIndex}>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="responsibilities">
                    <h4>Responsibilities</h4>
                    <ul>
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-used">
                    <h4>Technologies Used</h4>
                    <div className="tech-grid">
                      {exp.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="tech-item">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </LazyMotion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
