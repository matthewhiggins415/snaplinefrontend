import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LogoContainer = styled(Link)`
  min-width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  text-decoration: none;
  cursor: pointer;
  color: red;

  @media (max-width: 420px) {
    /* Styles for screens up to 576px wide */
    display: flex;
    text-align: left;
  }
`