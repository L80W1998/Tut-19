import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddComment = () => {
  const [text, setText] = useState("");

  const { addComment } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        required="required"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
