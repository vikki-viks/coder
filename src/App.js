import "./App.css";
import { Title } from "./components/Title";
import { BaseInput } from "./components/BaseInput";
import { BaseButton } from "./components/BaseButton";
import { Card } from "./components/Card";
import { Line } from "./components/Line";
import { useState, useEffect } from "react";
const Cryptr = require("cryptr");

const wait = (ms) => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
};

function App() {
  const [inputString, setInputString] = useState("");
  const [inputSecondString, setInputSecondString] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [showSecondSpinner, setShowSecondSpinner] = useState(false);
  const [result, setResult] = useState("");
  const [secondResult, setSecondResult] = useState("");
  const [showError, setShowError] = useState(false);

  const handleClick = async () => {
    setResult("");
    setShowSpinner(true);
    await wait(100);
    const cryptr = new Cryptr("katyaoksana");
    const result = cryptr.encrypt(inputString);
    setResult(result);
    setShowSpinner(false);
  };

  const handleSecondClick = async () => {
    setSecondResult("");
    setShowSecondSpinner(true);
    setShowError(false);
    await wait(100);
    const cryptr = new Cryptr("katyaoksana");
    try {
      const result = cryptr.decrypt(inputSecondString);
      setSecondResult(result);
    } catch (error) {
      setShowError(true);
    } finally {
      setShowSecondSpinner(false);
    }
  };

  return (
    <div className="App">
      <Title text="ENTER A MESSAGE YOU WANT TO ENCODE"></Title>
      <BaseInput
        setInput={setInputString}
        placeholder="Enter the message here"
        someString={inputString}
      ></BaseInput>
      <BaseButton
        text="Encode"
        showSpinner={showSpinner}
        onClick={() => handleClick()}
      ></BaseButton>
      <Title text="THE DECODED STRING"></Title>
      <Card text={result} placeholder="The result will be here"></Card>

      <Line></Line>

      <Title text="ENTER A MESSAGE YOU WANT TO DECODE"></Title>
      <BaseInput
        showError={showError}
        setInput={setInputSecondString}
        placeholder="Enter the message here"
        someString={inputSecondString}
      ></BaseInput>
      <BaseButton
        text="Decode"
        showSpinner={showSecondSpinner}
        onClick={() => handleSecondClick()}
      ></BaseButton>
      <Title text="THE ENCODED STRING"></Title>
      <Card text={secondResult} placeholder="The result will be here"></Card>
    </div>
  );
}

export default App;
