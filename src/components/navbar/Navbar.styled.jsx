import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
  box-shadow: 1px 1px 2px gray;
`;
export const Links = styled.div`
  display: flex;
  gap: 20px;
  color: white;
`;
