import React, { useReducer } from "react";

const updateReducer = (state, action) => {
  switch (action.type) {
    case "MINUS":
      return { ...state, count: state.count - 1 };
    case "PLUS":
      return { ...state, count: state.count + 1 };
    case "INPUT":
      return { ...state, input: action.payload };
    default:
      return state;
  }
};

const ACTION = {
  PLUS: "PLUS",
  MINUS: "MINUS",
  UPDATE_KEY: "INPUT",
};

const Reducer = () => {
  const [state, dispatch] = useReducer(updateReducer, { count: 0, input: "" });

  return (
    <div className="parent">
      <button
        onClick={() =>
          dispatch({
            type: ACTION.MINUS,
          })
        }
      >
        -
      </button>
      <div>{state.count}</div>
      <button
        onClick={() =>
          dispatch({
            type: ACTION.PLUS,
          })
        }
      >
        +
      </button>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: ACTION.UPDATE_KEY, payload: e.target.value })
        }
      />
      <div>Your enter keys are = {state.input}</div>
    </div>
  );
};

export default Reducer;
