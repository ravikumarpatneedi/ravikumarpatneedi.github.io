import React from "react";
import {
  LazyMotion,
  domAnimation,
  m as motion,
  AnimatePresence,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CTB – Core Banking APIs & Batch Processing",
      description:
        "Developed backend APIs and batch jobs for core banking functions like date flip, booking retry, and reconciliation. Used Swagger and Mastercraft for API design, and automated batch processes via PostgreSQL and Bash scripts. Improved batch job efficiency by 35%, contributing to faster reconciliation cycles and reduced manual intervention.",
      technologies: [
        "Java",
        "DB2",
        "Bash",
        "Swagger",
        "Mastercraft",
      ],
      github: "https://github.com/ravipatneedi/ctb",
      demo: null,
    }
  ];

  return (
    <div className="projects-container">
      <div className="section-title-container">
        <h2 className="section-title">Projects</h2>
      </div>
      <p className="section-subtitle">Some of my recent work</p>

      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <motion.div className="projects-grid" layout>
            {projects.map((project) => (
              <motion.div className="project-card" key={project.id} layout>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="tech-badge">
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FontAwesomeIcon icon={faLink} className="fa-icon" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
};

export default Projects;
