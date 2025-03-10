import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const counterhandeler = () => {
    setCount((s) => s + 1);
  };

  return (
    <div className="App">
      <Props name="Elleni Bisrat" email="ellenibisrat94@gmail.com" age="21" />
      <p className="count_btn">count : {count}</p>
      <button onClick={counterhandeler} className="countChange">
        Count
      </button>
    </div>
  );
}
const Props = (props) => {
  return (
    <div className="container">
      <p>
        Name: <span style={{ color: "darkblue" }}>{props.name}</span>{" "}
      </p>
      <p>
        Email: <span style={{ color: "yellow" }}>{props.email}</span>{" "}
      </p>
      <p>
        Age: <span style={{ color: "purple" }}>{props.age}</span>
      </p>
      </div>
  );
};

export default App;
