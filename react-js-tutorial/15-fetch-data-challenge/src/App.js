import Form from "./Form";
import { useState } from "react";

function App() {
  const [reqType, setReqType] = useState("users");

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
    </div>
  );
}

export default App;
