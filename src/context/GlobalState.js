import { createContext, useReducer } from "react";
import ListReducer from "./ListReducer";

const initialState = {
  comments: ["first comment", "second comment"],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ListReducer, initialState);

  function deleteComment(comment) {
    dispatch({
      type: "DELETE_COMMENT",
      payload: comment,
    });
  }

  function addComment(comment) {
    dispatch({
      type: "ADD_COMMENT",
      payload: comment,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        comments: state.comments,
        addComment,
        deleteComment,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
