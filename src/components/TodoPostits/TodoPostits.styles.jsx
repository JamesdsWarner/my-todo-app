import styled from "styled-components";

export const TodoPostitsWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
`;

export const TodoPostitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5vw;
  justify-content: space-around;
`;

export const AddPostitButton = styled.button`
  width: 100px;
  height: 100px;
  left: 0;
  right: 0;
  border-radius: 50%;
  border: 1px solid black;
  background: none;
  /* margin-top: 50px; */
  font-size: 55px;
  transition: all 0.2s ease;
  cursor: pointer;
  font-weight: 800;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 100px;
  position: absolute;
  position: fixed;

  &:hover {
    background-color: #fff740;
  }
`;

// colours:
// ff65a3
// 7afcff
// feff9c
// fff740
// ff7eb9
