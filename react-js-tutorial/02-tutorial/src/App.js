import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Jorrit";

  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hello {handleNameChange()}!
        </p>
        {/* <p>{name}</p> */}
      </header>
    </div>
  );
}

export default App;
