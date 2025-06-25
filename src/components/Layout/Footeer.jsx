import React from "react";
import "../../css/Layout.css"
import emailLogo from "../../assets/email.jpeg";
import githubLogo from "../../assets/github.jpeg";
import instagramLogo from "../../assets/instagram.jpeg";
import copyrightLogo from "../../assets/copyright.jpeg";

function SocialMediaIcons({ gitAccount, instagram, email }) {
  return (
    <>
      <div className="SocialsContainer">
        <div>
          <a href="#" target="_blank" rel="noreferrer">
            <img src={githubLogo} alt="gitLogo" />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src={instagramLogo}
              alt="instagramLogo"
              target="_blank"
              rel="noreferrer"
            />
          </a>
        </div>
        <div>
          <a href="#" target="_blank" rel="noreferrer">
            <img src={emailLogo} alt="emailLogo" />
          </a>
        </div>
      </div>
    </>
  );
}

function CopyRight() {
  return (
    <>
      <div>
        <div className="logoDiv">
          <div className="logoImageDiv">
            <img className="logoImage" src="/Logo.jpeg" alt="logo" />
          </div>
          <div>
            <img
              className="copyrightImage"
              src={copyrightLogo}
              alt="copyrightLogo"
            />
          </div>
          <div className="logoNameDiv">
            <p className="logoNamePara">
              Copyright
              <br />
              @2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <CopyRight />
      <SocialMediaIcons gitAccount={""} instagram={""} email={""} />
    </footer>
  );
}
