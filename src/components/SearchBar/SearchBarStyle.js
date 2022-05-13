import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const SearchBar = styled.input`
  padding: 0 15px;
  margin-bottom: 40px;
  height: 40px;

  ::placeholder {
    ${colors.primary}
  }

  @media (${breakpoints.tabletMedium}) {
    max-width: 400px;
    border: 1px solid;
    border-color: ${colors.textSecondary};
    border-radius: 6px;
    font-size: 14px;
    &:focus {
      border-color: ${colors.textPrimary};
    }
  }

  @media (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;
