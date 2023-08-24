import "./style.css";
import { AddComment } from "./components/AddComment";
import { CommentList } from "./components/CommentList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider className="App">
      <AddComment />
      <CommentList />
    </GlobalProvider>
  );
}

export default App;
