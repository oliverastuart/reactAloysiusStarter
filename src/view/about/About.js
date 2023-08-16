import React from "react";
import SideNav from "../../components/layouts/SideNav";
import { ABOUT_ME } from "../../resources/constants/strings/string";
import "./About.css";
export default function About() {
  return (
    <SideNav CurrentComponent={ABOUT_ME}>
      <div className="about-me-container">
        <div className="profile-image-container">
          <img
            src="https://avatars.dicebear.com/api/avataaars/:user.svg" // Replace this URL with your actual profile image URL
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="about-info-container">
          <h2>About Me</h2>
          <p>
            Hi, I'm Stuart Olivera! I am passionate about designing and coding
            with React. I love creating beautiful and interactive user
            interfaces. When I'm not coding, I enjoy exploring new technologies
            and learning random coding-related stuff.
          </p>
        </div>
      </div>
    </SideNav>
  );
}
