import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Section.scss";

const Section = ({
  modifiers,
  actionText,
  title,
  buttonText,
  buttonPath,
  isHeadingVisible = true,
  children,
}) => {
  const modifierClasses = {
    testimonials: "Section_testimonials",
  };

  let sectionClass = "Section";

  if (modifiers) {
    modifiers.map((modifier) => {
      sectionClass += " " + modifierClasses[modifier];
    });
  }

  return (
    <section className={sectionClass}>
      <div className="Section-Inner">
        {actionText && <span className="Section-ActionText">{actionText}</span>}
        {isHeadingVisible && (
          <div className="Section-Heading">
            {title && <h2 className="Section-Title">{title}</h2>}
            {buttonText && (
              <Link to={buttonPath}>
                <Button modifiers={["heading", "outline"]}>{buttonText}</Button>
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
