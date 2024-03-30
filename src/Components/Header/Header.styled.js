import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 80px;
  padding: 20px;
  color: #439db7;
  background-color: #f0f0f0;
  text-align: center;
  h3 {
    margin: 0;
  }
`;
const ToggleButton = styled.button`
  background-color: #439db7;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #367a94;
  }
`;

export { HeaderContainer, ToggleButton };
