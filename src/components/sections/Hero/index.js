import React, { useState, useEffect, useCallback, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Hero.css";
import profileWebp from "../../../assets/profile.webp";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = useMemo(
    () => [
      "Software Engineer",
      "Java Developer",
      "API Developer",
      "Backend Developer",
      "Reports Developer",
    ],
    []
  );
  const period = 2000; // How long to pause after typing

  const tick = useCallback(() => {
    const i = loopNum % titles.length;
    const fullText = titles[i];

    if (isDeleting) {
      // When deleting, remove a character and speed up typing
      setText(fullText.substring(0, text.length - 1));
      setTypingSpeed(70);
    } else {
      // When typing, add a character
      setText(fullText.substring(0, text.length + 1));
      setTypingSpeed(150);
    }

    // Handle the typing/deleting state changes
    if (!isDeleting && text === fullText) {
      // Just finished typing
      setTypingSpeed(period); // Wait after typing completes
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      // Just finished deleting
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  }, [text, isDeleting, loopNum, titles]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [tick, typingSpeed]);

  return (
    <div className="hero-container">
      <div className="hero-bg-shape hero-shape-1"></div>
      <div className="hero-content">
        <div className="hero-text">
          <span className="greeting">Hello, I'm</span>
          <h1>Ravi Patneedi</h1>
          <h2>
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p>
            I'm a passionate Backend Developer with 4+ years of experience, currently working as a Systems Engineer at TCS. My expertise lies in building scalable APIs, automating backend processes, and optimizing database performance in the banking domain. I thrive in agile teams, love solving complex problems, and continuously seek opportunities to learn and grow in modern backend technologies.
          </p>
          <div className="hero-btns">
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              className="btn secondary-btn"
              download="ravi_patneedi_Resume.pdf"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/ravikumarpatneedi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/patneedi-ravi-kumar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with me on LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="mailto:ravikumarpatneedi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send me an email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="blob-effect"></div>
          <div className="profile-circle">
            <picture>
              <source srcSet={profileWebp} type="image/webp" />
              <img
                src={profileWebp}
                alt="Ravi Patneedi"
                className="profile-img"
                width="400"
                height="400"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
