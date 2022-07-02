import Square from "./Square";
import Input from "./Input";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="App">
      <Square color={color} />
      <Input color={color} setColor={setColor} />
    </div>
  );
}

export default App;
