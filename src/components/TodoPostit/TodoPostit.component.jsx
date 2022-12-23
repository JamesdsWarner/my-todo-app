import { useState } from "react";
import Checkmark from "../Checkmark/Checkmark.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSo } from "@fortawesome/fontawesome-svg-core";
import * as Styled from "./TodoPostit.styles";

const TodoPostit = ({ setPostitsArray, index, postitsArray, postitValue }) => {
  const [todoNote, setTodoNote] = useState({});
  const [fontSize, setFontSize] = useState(23);
  const [alignText, setAlignText] = useState("center");
  const [maxRow, setMaxRow] = useState(5);

  const handleChange = (e) => {
    setTodoNote({ ...todoNote, note: e.target.value });

    setPostitsArray(
      postitsArray.map((obj, ind) => {
        if (ind === index) {
          return { ...obj, note: e.target.value };
        }

        return obj;
      })
    );

    // setPostitsArray([

    // if (todoNote.length > 124) {
    //   setFontSize(146 - todoNote.length);
    //   setAlignText("left");

    // }
    // console.log(todoNote.length * 1.12);
    // console.log(fontSize * maxRow);
    // console.log(maxRow);
    // console.log(todoNote.length);
    if (todoNote.length > 105) {
      setMaxRow(Math.ceil(1 + todoNote.length / fontSize));

      if (todoNote.length > 124) {
        setFontSize(todoNote.length / maxRow);
        setFontSize(146 - todoNote.length + 0.99);
        setAlignText("left");
      }
    }
    if (todoNote.length <= 124) {
      setAlignText("center");
      if (!fontSize === 30) {
        setFontSize(fontSize + 1);
      }
    }
  };

  const handleRemoveNote = () => {
    setPostitsArray(
      postitsArray.filter((postit, i) => i !== index),
      postitsArray.map((obj, ind) => {
        if (obj.id === index) {
          return { ...obj, id: ind - 2 };
        }
      })
    );

    setTodoNote("");
  };

  const handleClearButtonClick = () => {
    setTodoNote("");

    setPostitsArray(
      postitsArray.map((obj, ind) => {
        if (ind === index) {
          return { ...obj, note: "" };
        }
        return obj;
      })
    );
  };

  const colours = {
    yellow: "fff740",
    pink: "ff65a3",
    blue: "7afcff",
    orange: "ffa930",
    green: "74ed4b",
  };

  return (
    <Styled.TodoPostitWrapper colour={colours[postitsArray[index].colour]}>
      {/* <TextareaAutosize /> */}
      <Styled.Chevron>
        <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
      </Styled.Chevron>
      <Styled.TodoPostitInput
        rows={10}
        placeholder="Add a task..."
        onChange={(e) => handleChange(e)}
        fontSize={fontSize}
        maxLength={124}
        value={postitsArray[index].note}
        alignText={alignText}
        maxRows={maxRow}
      />

      <Styled.DeleteIcon onClick={handleRemoveNote}>&#10006;</Styled.DeleteIcon>

      <Styled.DoneButtonWrapper>
        <Styled.DoneButton onClick={handleClearButtonClick}>
          <Checkmark />
        </Styled.DoneButton>
      </Styled.DoneButtonWrapper>
    </Styled.TodoPostitWrapper>
  );
};

export default TodoPostit;
