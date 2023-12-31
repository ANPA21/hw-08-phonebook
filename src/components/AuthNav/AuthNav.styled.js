import { styled } from '@mui/material';
import { Button } from '@mui/material';

export const NavStyled = styled(`nav`)`
  display: flex;
  gap: 10px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 479px) {
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    max-width: 100%;
    gap: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 100%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1400px;
  }
`;

export const ButtonLink = styled(Button)`
  width: 70vw;
  max-width: 300px;
  ${({ theme }) => `
background-color : ${theme.palette.buttons.bg};
color: ${theme.palette.buttons.text};`}
`;
