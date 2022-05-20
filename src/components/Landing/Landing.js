import { Button } from "../Button/ButtonStyle";

import LandingImg from "../../assets/images/landing.jpg";
// import { Link } from "react-router-dom";
import {
  Landing as LandingWrapper,
  LandingContent,
  LandingImage,
  LandingOverlay,
  LandingSubitle,
  LandingTitle,
  LandingOverlayPrimary,
  LandingOverlaySecondary,
  LandingContentInner,
} from "./LandingStyle";

const Landing = () => {
  return (
    <LandingWrapper>
      <LandingImage src={LandingImg} alt="landing-Image" />
      <LandingOverlay>
        <LandingOverlayPrimary />
        <LandingOverlaySecondary />
      </LandingOverlay>
      <LandingContent>
        <LandingContentInner>
          <LandingTitle>
            Learn what matters, Speck Academy powered by FOI
          </LandingTitle>
          <LandingSubitle>
            Make a turnaround in your career or upgrade your current skill set
            with knowledge-based lessons from IT practice.
          </LandingSubitle>
          <Button>Explore</Button>
        </LandingContentInner>
      </LandingContent>
    </LandingWrapper>
  );
};

export default Landing;
