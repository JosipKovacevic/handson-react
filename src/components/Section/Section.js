import React from "react";
import { Link } from "react-router-dom";
// import Button from "../Button/Button";
import "./Section.scss";
import {
  Section as SectionWrapper,
  SectionHeading,
  SectionActionText,
  SectionInner,
  SectionTitleH1,
  SectionTitleH2,
} from "./SectionStyle";
import { Button } from "../Button/ButtonStyle";
import { ButtonLink } from "../Header/HeaderStyle";

const Section = ({
  isHeading,
  isOutline,
  actionText,
  title,
  buttonText,
  buttonPath,
  isHeadingVisible = true,
  children,
  isMainSection = false,
  isCentered,
}) => {
  return (
    <SectionWrapper>
      <SectionInner>
        {actionText && <SectionActionText>{actionText}</SectionActionText>}
        {isHeadingVisible && (
          <SectionHeading>
            {title &&
              (isMainSection ? (
                <SectionTitleH1 isCentered={isCentered}>{title}</SectionTitleH1>
              ) : (
                <SectionTitleH2 isCentered={isCentered}>{title}</SectionTitleH2>
              ))}
            {buttonText && (
              <ButtonLink to={buttonPath}>
                <Button isOutline>{buttonText}</Button>
              </ButtonLink>
            )}
          </SectionHeading>
        )}
        {children}
      </SectionInner>
    </SectionWrapper>
  );
};

export default Section;

// <SectionWrapper>
//   <SectionInner>
//     <SectionActionText>{actionText}</SectionActionText>

//     <SectionHeading>
//       <SectionTitle>{title}</SectionTitle>
//     </SectionHeading>
//   </SectionInner>
// </SectionWrapper>
