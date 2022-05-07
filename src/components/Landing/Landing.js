import { Button } from "../Button/ButtonStyle";
import "./Landing.scss";
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
    // <div className="Landing">
    //   <img className="Landing-Image" src={LandingImg} alt="landing-Image" />
    //   <div className="Landing-Overlay">
    //     <div className="Landing-OverlayPrimary"></div>
    //     <div className="Landing-OverlaySecondary"></div>
    //   </div>
    //   <div className="Landing-Content">
    //     <div className="Landing-Content-Inner">
    //       <h1 className="Landing-Title">
    //         Learn what matters, Speck Academy powered by FOI
    //       </h1>
    //       <p className="Landing-Subtitle">
    //         Make a turnaround in your career or upgrade your current skill set
    //         with knowledge-based lessons from IT practice.
    //       </p>
    //       <Link to="/Courses">
    //         <Button modifiers={["landing"]}>Explore Courses</Button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Landing;
