import { useState } from "react";
import TodoPostit from "../TodoPostit/TodoPostit.component";
import Checkmark from "../Checkmark/Checkmark.component";
import * as Styled from "./TodoPostits.styles";

const TodoPostits = () => {
  const [postitsArray, setPostitsArray] = useState([]);
  const [colourNumber, setColourNumber] = useState(0);

  const colours = {
    0: "yellow",
    1: "pink",
    2: "blue",
    3: "orange",
    4: "green",
  };

  const handleAddButtonClick = () => {
    if (colourNumber !== 4) {
      setColourNumber(colourNumber + 1);
    } else {
      setColourNumber(0);
    }
    setPostitsArray([...postitsArray, { note: "", colour: `${colours[colourNumber]}` }]);
  };

  return (
    <Styled.TodoPostitsWrapper>
      <Styled.TodoPostitsContainer>
        {postitsArray.map((postit, i) => {
          return (
            <TodoPostit
              postitValue={postit}
              setPostitsArray={setPostitsArray}
              postitsArray={postitsArray}
              key={i}
              index={i}
            />
          );
        })}
      </Styled.TodoPostitsContainer>
      <Styled.AddPostitButton onClick={handleAddButtonClick}>+</Styled.AddPostitButton>
    </Styled.TodoPostitsWrapper>
  );
};

export default TodoPostits;
