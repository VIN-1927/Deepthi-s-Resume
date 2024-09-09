import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const MainFooter = styled.div`
  .Social-container {
    gap: 25px;

    bottom: 0;
    display: flex;
    font-size: 15px;

    left: 300px;
    height: 100px;
    justify-content: center;
    align-items: center;
  }
`;

function Footer() {
  return (
    <MainFooter className="main-footer">
      <div className="Social-container">
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>

        <a
          href="https://www.twitter.com/jamesqquick"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>

        <a
          href="https://www.instagram.com/learnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <div></div>
      </div>
    </MainFooter>
  );
}

export default Footer;
