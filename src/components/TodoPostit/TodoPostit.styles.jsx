import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

export const TodoPostitWrapper = styled.div`
  background-color: #${(props) => props.colour};
  justify-content: end;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  min-width: 300px;
  position: relative;
`;

export const Chevron = styled.div`
  z-index: 9999;
  > * {
    color: black;
  }
`;

export const TodoPostitInput = styled(TextareaAutosize)`
  background: none;
  border: none;
  text-align: ${(props) => props.alignText};
  font-size: ${(props) => props.fontSize}px;
  display: block;
  margin: auto;
  width: 100%;
  overflow: hidden;
  resize: none;
`;

export const DeleteIcon = styled.span`
  position: absolute;
  top: 20px;
  right: 1%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.2s ease;
  &:hover {
    color: red;
  }
`;

export const DoneButtonWrapper = styled.div`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease;

  display: flex;
  padding: 0;
  overflow: hidden;
  justify-content: center;
  width: 50px;
  height: 50px;

  background: none;
`;

export const DoneButton = styled.button`
  background: none;
  border-radius: 50%;
  opacity: 0.8;
  border: 1.5px solid black;
  width: 90%;
  padding: 0;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: white;
  }
`;
