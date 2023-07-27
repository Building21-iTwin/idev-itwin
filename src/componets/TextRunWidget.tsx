import { Button, Flex, LabeledInput } from "@itwin/itwinui-react";
import React from "react";

const TextRunWidget = () => {
  const [inputText, setInputText] = React.useState<string>("");
  const [outputText, setOutputText] = React.useState<string>("Awaiting Text");
  const [history, setHistory] = React.useState<string[]>([]);

  function handleInputText(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputText(event.target.value);
  }

  function run(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setOutputText(inputText);
    const newHistory = [...history];
    newHistory.push(inputText);
    setHistory(newHistory);
  }

  function clearText(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setOutputText("");
  }

  function previousText(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const newHistory = [...history];
    const previousValue = newHistory.pop();
    setHistory(newHistory);
    if (previousValue !== undefined) {
      setInputText(previousValue);
    }
  }

  return (<div>
    <LabeledInput value={inputText} onChange={handleInputText} />
    <Flex>
      <Button onClick={run}>Run</Button>
      <Button onClick={clearText}>Clear</Button>
      <Button onClick={previousText}>Previous</Button>
    </Flex>
    <LabeledInput value={outputText} />
  </div>);

}

export default TextRunWidget;