import React from "react";
import styled, { ThemeProvider } from "styled-components";
import particles from "react-particles-js";

const theme = {
  color: {
    title: "#66FCF1",
    subTitle: "#C5C6C7",
    content: "#4F88A3",
    line: "#4CA7BC",
    shadow: "#0D3842",
    bckg: "#0B0B10",
  },
  font: {
    mont: "'Montserrat', sans-serif",
    title: "'Playfair Display', serif",
    content: "'Open Sans', sans-serif",
  },
};

export const Particles = styled(particles)`
  position: fixed;
  width: 100vw;
  height: 100%;
  z-index: -10;
  background: #0b0c10;
`;

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Body = styled.div`
  max-height: 100vh;
  max-width: 100vw;
`;

export const ImgBorder = styled.img`
  // position: fixed;
  user-select: none;
  width: 13rem;
  // z-index: 2;
  @media (max-width: 900px) {
    visibility: hidden;
  }
`;

export const Nav = styled.nav`
  background-color: #0b0c10;
  padding-top: 7%;
  user-select: none;
  z-index: 1;
`;

export const Li = styled.li`
  border-bottom: ${(props) =>
    props.active
      ? "4px solid rgb(76, 167, 188, 50%)"
      : "4px solid rgb(76, 167, 188, 100%)"};
  @media (max-width: 720px) {
    border-width: 3px;
  }
`;

export const A = styled.span`
  font-family: ${(props) => props.theme.font["mont"]};
  opacity: 1;
  line-height: 0;
  &:hover {
    color: ${(props) => props.theme.color["title"]};
    opacity: 0.7;
  }
  @media (max-width: 720px) {
    font-size: 0.7rem;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  font-size: 0.5rem;
`;

export const Div = styled.div`
  margin: ${(props) => (props.home ? "" : "0 15%")};
  padding-top: ${(props) => (props.home ? "17%" : "13%")};
  @media (max-width: 720px) {
    padding-top: 20%;
    margin: ${(props) => (props.home ? "" : "0 7%")};
  }
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.color["title"]};
  font-family: ${(props) => props.theme.font["mont"]};
  font-size: ${(props) => (props.bottom ? "2.3rem" : "2.5rem")};
  font-weight: 800;
  margin-bottom: 0;
  @media (max-width: 720px) {
    font-size: ${(props) => (props.bottom ? "1.6rem" : "1.7rem")};
  }
`;

export const P = styled.p`
  color: ${(props) => props.theme.color["subTitle"]};
  font-family: ${(props) => props.theme.font["mont"]};
  display: ${(props) => (props.inline ? "inline" : "block")};
  font-size: ${(props) => (props.inline ? ".8rem" : "")};
  vertical-align: middle;
  &:hover {
    text-decoration: none;
    opacity: ${(props) => (props.inline ? 0.8 : 1)};
  }
  @media (max-width: 720px) {
    font-size: ${(props) => (props.inline ? ".7rem" : "")};
  }
`;

export const Sub = styled(P)`
  font-weight: 600;
  margin: 0;
`;

export const D = styled(P)`
  margin: 0;
`;

export const Title = styled(Sub)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.color["title"]};
  margin: 0;
  @media (max-width: 720px) {
    font-size: 0.8rem;
  }
`;

export const I = styled.i`
  color: ${(props) => props.theme.color["title"]};
  font-size: 1.7rem;
  margin-right: 0.5rem;
  vertical-align: middle;
  &:hover {
    opacity: 0.8;
  }
`;

export const Img = styled.img`
    height: 24rem;
    padding: .7rem;
    // border: 5px dashed ${(props) => props.theme.color["line"]}; 
    user-select: none;
    @media(max-width: 720px) {
        height: 12rem;
        border-width: 4px;
    }
`;

export const ProjectImg = styled.img`
  height: 17rem;
  padding: 0.7rem;
  border: 10px groove ${(props) => props.theme.color["line"]};
  user-select: none;
  @media (max-width: 720px) {
    height: 12rem;
    border-width: 4px;
  }
`;

export const SkillDiv = styled.div`
  border-radius: 5px;
  min-width: 25%;
  max-width: 28%;
  @media (max-width: 720px) {
    max-width: 100%;
  }
`;

export const PortfolioDiv = styled.div`
  border-radius: 5px;
  min-width: 25%;
  max-width: 28%;
  @media (max-width: 720px) {
    max-width: 100%;
  }
`;

export const H4 = styled.h4`
  color: ${(props) => props.theme.color["title"]};
  font-family: ${(props) => props.theme.font["mont"]};
  font-weight: 600;
`;

export const Logo = styled.i`
  color: ${(props) => props.theme.color["title"]};
  font-size: 5rem;
`;

export const AboutDiv = styled.div`
  padding: 1rem 0;
  @media (max-width: 720px) {
    font-size: 0.6rem;
  }
`;

export const Hr = styled.hr`
  border: none;
  border-top: dotted #66fcf1;
  border-width: 1rem;
  width: 5rem;
  margin: auto;
`;

export const Anchor = styled.a`
  text-decoration: none;
  background-color: none;
  display: contents;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
`;
