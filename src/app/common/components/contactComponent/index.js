import React, { Component } from "react";
import iconEmail from "Icons/icon-email.png";
import iconLinkedIn from "Icons/icon-linkedin.png";
import iconGithub from "Icons/icon-github.png";
import iconResume from 'Icons/icon-resume.png';
import iconFacebook from 'Icons/icon-facebook.svg';
import iconInstagram from 'Icons/icon-instagram.svg';
import iconTwitter from 'Icons/icon-twitter.svg';
import iconYouTube from 'Icons/icon-youtube.svg';
import iconYouTubeWhite from 'Icons/icon-youtube-white.svg';
import iconFacebookWhite from "Icons/icon-facebook-white.svg";
import iconTwitterWhite from "Icons/icon-twitter-white.svg";
import iconInstagramWhite from "Icons/icon-instagram-white.svg";
import Div from "Common/components/div";
import styles from "./contact_component.module.scss";

const ContactComponent = ({ className, isWhite, hideResume }) => {
  return (
    <Div
      row
      justify
      align
      className={`${styles.social_container} ${className}`}
    >
      <a className={styles.icon_link} target="_blank" href="https://www.youtube.com/user/tischnewtheatre">
        <img
          src={isWhite ? iconYouTubeWhite : iconYouTube}
          className={styles.icon}
        />
      </a>
      <a className={styles.icon_link} target="_blank" href="https://twitter.com/TischNewTheatre">
        <img
          src={isWhite ? iconTwitterWhite : iconTwitter}
          className={styles.icon}
        />
      </a>
      <a className={styles.icon_link} target="_blank" href="https://www.facebook.com/tischnewtheatre">
        <img
          src={isWhite ? iconFacebookWhite : iconFacebook}
          className={styles.icon}
        />
      </a>
      <a className={styles.icon_link} target="_blank" href="http://www.instagram.com/tischnewtheatre">
        <img
          src={isWhite ? iconInstagramWhite : iconInstagram}
          className={styles.icon}
        />
      </a>
      {/*
        !hideResume && (
          <a className={styles.icon_link} target="_blank" href="https://drive.google.com/file/d/1wsyIqp20IRSRLPZhYG5FqwdqLek8vx4X/view?usp=sharing">
          <img
            src={isWhite ? iconResumeWhite : iconResume}
            className={styles.icon}
          />
        </a>  
        )
        */}
    </Div>
  );
};

export default ContactComponent;
