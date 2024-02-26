import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 412px) {
      ${props}
    }
  `;
};

export const mdMobile = (props) => {
  return css`
    @media only screen and (max-width: 960px) {
      ${props}
    }
  `;
};

export const footer = (props) => {
  return css`
    @media only screen and (max-width: 646px) {
      ${props}
    }
  `
}