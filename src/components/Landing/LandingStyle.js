import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Landing = styled.div`
  height: 100vh;
  position: relative;
`;

export const LandingImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const LandingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const LandingOverlayPrimary = styled.div`
  height: 100%;
  width: 27%;
  position: absolute;
  left: 0;
  background: ${colors.primary};
`;

export const LandingOverlaySecondary = styled.div`
  height: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  width: 73%;
  background: #000000ad;
`;

export const LandingContent = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 30px;

  @media (${breakpoints.desktop}) {
    margin-left: 120px;
  }
`;

export const LandingContentInner = styled.div``;

export const LandingTitle = styled.h1`
  color: ${colors.secondary};
  font-size: 26px;
  margin-bottom: 24px;
  max-width: 200px;
  justify-content: space-evenly;

  @media (${breakpoints.tabletSmall}) {
    max-width: 450px;
    font-size: 56px;
  }
`;

export const LandingSubitle = styled.p`
  color: ${colors.secondary};
  font-size: 10px;
  max-width: 200px;
  margin-bottom: 48px;

  @media (${breakpoints.tabletSmall}) {
    font-size: 16px;
    max-width: 440px;
  }
`;
