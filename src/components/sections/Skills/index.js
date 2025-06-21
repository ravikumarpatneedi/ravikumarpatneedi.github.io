import React from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        "Java",
        "Python",
        "SQL",
        "HTML",
        "CSS",
        "PHP",
      ],
    },
    {
      category: "Frameworks",
      items: [
        "React Native",
        "Node.js",
        "Spring Boot",
        "Flask",
      ],
    },
    {
      category: "Libraries",
      items: [
        "React.js",
        "Redux",
        "GraphQL",
        "Bootstrap",
      ],
    },
    {
      category: "Databases",
      items: ["SQL", "PostgreSQL", "DB2"],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Git",
        "Linux",
        "Putty",
        "Jenkins",
        "VSCode",
        "Eclipse",
        "Postman",
      ],
    },
  ];

  return (
    <div className="skills-container">
      <div className="section-title-container">
        <h2 className="section-title">My Skills</h2>
      </div>
      <p className="section-subtitle">Technologies and tools I work with</p>

      <LazyMotion features={domAnimation}>
        <motion.div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </LazyMotion>
    </div>
  );
};

export default Skills;
