import styled from "styled-components";

export const ChartContainer = styled.div`
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: ${(props) => (props.mode === "edit" ? "flex" : "block")};
  justify-content: ${(props) => (props.mode === "edit" ? "center" : "initial")};
  align-items: ${(props) => (props.mode === "edit" ? "center" : "initial")};
  height: ${(props) => (props.mode === "edit" ? "100vh" : "auto")};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  font-size: 18px;
  margin-bottom: 20px;
`;
export const Button = styled.button`
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
