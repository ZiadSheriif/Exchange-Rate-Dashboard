import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 60px;
  padding: 15px;
  color: #439db7;
  background-color: #f0f0f0;
  text-align: center;
  h3 {
    margin: 0;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;
const ToggleButton = styled.button`
  background-color: #439db7;
  color: white;
  border: none;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #367a94;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 8px;
    width: 50%;
  }
`;

export { HeaderContainer, ToggleButton };
