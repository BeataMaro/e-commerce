import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

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
    opacity: 0.6;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rosybrown;
    mix-blend-mode: overlay;
  }
`;

const BlogScreen = () => {
  return (
    <>
      <Header />
      <h2>BLOG</h2>
      <StyledVideo>
        <video muted loop autoplay='autoplay'>
          <source
            src='/pexels-pavel-danilyuk-6459917.mp4'
            type='video/mp4'
          ></source>
        </video>
        <div className='overlay'></div>
      </StyledVideo>
    </>
  );
};

export default BlogScreen;
