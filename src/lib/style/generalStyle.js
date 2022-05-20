import styled from "styled-components";

import {
  Form as FormFormik,
  Field as FieldFormik,
  ErrorMessage as ErrorMessageFormik,
} from "formik";
import { css } from "styled-components";
import { colors, fonts, breakpoints } from "./theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 48px;

  @media (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 48px;
  }

  @media (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Form = styled(FormFormik)`
  @media (${breakpoints.tabletSmall}) {
    width: 400px;

    ${(props) =>
      props.isCentered !== false &&
      `
            margin: 0 auto;
        `}
    ${(props) =>
      props.isRight === true &&
      `
            margin-right: 0 auto;
        `}
  }
`;

export const FormRow = styled.div`
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const FieldStyle = css`
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  width: 100%;
  line-height: 50px;
  height: 50px;
  padding: 0 12px;
  outline: none;
  font-size: 14px;
  font-family: ${fonts.primary};

  &:focus {
    border-color: ${colors.textPrimary};
  }

  @media (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const Field = styled(FieldFormik)`
  ${FieldStyle}
`;

export const Select = styled.select`
  ${FieldStyle}
`;

export const Option = styled.option``;

export const ErrorMessage = styled(ErrorMessageFormik)`
  font-size: 14px;
  color: ${colors.primary};
  padding-top: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FormSuccessMessage = styled.p`
  padding: 12px;
  font-size: 14px;
  color: #27ae60;
  text-align: center;
  background: rgba(111, 207, 151, 0.2);
  border-radius: 8px;
  line-height: 150%;

  ${(props) =>
    props.isError &&
    `
    color: #eb5757;
    background: rgba(235,87,87,0.2);
`}
`;

export const PasswordDiv = styled.div`
  padding: 14px;
`;

export const PasswordDivInner = styled.div`
  background-color: ${colors.bgSecondary};
  width: 300px;
  height: 150px;
  padding: 14px;
`;

export const PasswordDivInnerBig = styled.div`
  background-color: ${colors.bgSecondary};
  width: 100%;
  padding: 14px;
  height: 400px;
`;

export const PasswordText = styled.p`
  font-size: 14px;
  color: ${colors.textPrimary};
  font-family: ${fonts.primary};
`;

export const PasswordH3 = styled.h3`
  padding: 14px;
  font-size: 18px;
  color: ${colors.textPrimary};

  font-family: ${fonts.primary};
`;

export const Label = styled.p`
  padding-bottom: 5px;
  font-size: 14px;
  color: ${colors.textPrimary};

  ${(props) =>
    props.isLeft &&
    `
    text-align: left;
`}
`;
