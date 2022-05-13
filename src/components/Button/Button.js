import { Button as ButtonWrapper } from "./ButtonStyle";
//Preuzet od Adisa
const Button = ({ children, ...propsi }) => {
  return <ButtonWrapper {...propsi}>{children}</ButtonWrapper>;
};

export default Button;
