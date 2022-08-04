import "./App.css";
import Welcome from "./Components/FunctionComponents/Welcome";
import Thanks from "./Components/ClassComponents/Thanks";
import WelcomeWithArrowFunction from "./Components/FunctionComponents/WelcomeWithArrowFunction";

function App() {
  return (
    <div className="App">
      <Welcome />
      <br />
      <Thanks />
      <br />
      <WelcomeWithArrowFunction />
    </div>
  );
}

export default App;
