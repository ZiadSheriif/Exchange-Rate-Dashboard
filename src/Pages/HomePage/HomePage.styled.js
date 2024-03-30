import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  padding: 10px;
  display: flex;
  color: #439db7;
  &:hover {
    color: #367a94;
  }
`;
