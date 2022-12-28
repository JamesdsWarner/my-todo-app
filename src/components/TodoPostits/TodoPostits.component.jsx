import { useState } from "react";
import TodoPostit from "../TodoPostit/TodoPostit.component";
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
    if (postitsArray.length < 8) {
      if (colourNumber !== 4) {
        setColourNumber(colourNumber + 1);
      } else {
        setColourNumber(0);
      }
      setPostitsArray([...postitsArray, { note: "", colour: `${colours[colourNumber]}` }]);
    } else {
      alert("Sorry, you have reached the maximum amount of postits");
    }
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
              colour={postit.colour}
            />
          );
        })}
      </Styled.TodoPostitsContainer>

      {postitsArray.length < 1 && (
        <Styled.AddPostitHeader>
          Click the "+" button below to add a postit note...
        </Styled.AddPostitHeader>
      )}
      <Styled.AddPostitButton
        onClick={handleAddButtonClick}
        postitsArrayLength={postitsArray.length}
      >
        +
      </Styled.AddPostitButton>
    </Styled.TodoPostitsWrapper>
  );
};

export default TodoPostits;
