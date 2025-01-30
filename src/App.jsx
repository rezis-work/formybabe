import { useState } from "react";
import Question from "./components/Question";
import Yes from "./components/Yes";
function App() {
  const [isYes, setIsYes] = useState(localStorage.getItem("isYes") === "true");

  if (!isYes) {
    return <Question setIsYes={setIsYes} />;
  }

  if (isYes) {
    return <Yes />;
  }

  return <div>I love you so freacking much my Fareedat!</div>;
}

export default App;
