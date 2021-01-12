import "./App.css";
import { Title } from "./components/Title";
import { BaseInput } from "./components/BaseInput";
import { BaseButton } from "./components/BaseButton";

function App() {
  return (
    <div className="App">
      <Title text="ENTER A MESSAGE YOU WANT TO ENCODE"></Title>
      <BaseInput placeholder="Enter the message here"></BaseInput>
      <BaseButton text="Copy"></BaseButton>
    </div>
  );
}

export default App;
