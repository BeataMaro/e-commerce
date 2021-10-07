import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledVideo = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: black;

  video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    mix-blend-mode: overlay;
  }
`;

const StyledHeroText = styled.article`
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    color: white;
    font-weight: 900;
  }
`;

const VideoHero = () => {
  return (
    <StyledVideo>
      <video muted loop autoPlay='autoplay'>
        <source
          src='/pexels-pavel-danilyuk-6459917.mp4'
          type='video/mp4'
        ></source>
      </video>
      <div className='overlay'></div>
      <StyledHeroText>
        <h1 className='text-center'>Krawiectwo na miare Twoich potrzeb</h1>
        <Link to='/about'>
          <h3 className='text-center text-muted'>Poznajmy się...</h3>
        </Link>
      </StyledHeroText>
    </StyledVideo>
  );
};

export default VideoHero;
