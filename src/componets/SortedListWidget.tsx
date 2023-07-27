import { Button, Flex, LabeledInput } from "@itwin/itwinui-react";
import React from "react";


const SortedListWidget = () => {
  const [text, setText] = React.useState<string>("");
  const [textList, setTextList] = React.useState<string[]>([]);
  
  function updateText(event: React.ChangeEvent<HTMLInputElement>): void {
    setText(event.target.value);
  }

  function addTextToList(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const newList = [...textList];
    newList.push(text);
    setTextList(newList);
  }

  function sortList(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const newList = [...textList];
    newList.sort();
    setTextList(newList);
  }

  const listElements: JSX.Element[] = [];
  textList.forEach((value:string) => {
    listElements.push(<li>{value}</li>);
  });

  return (<div>
    <Flex>
      <LabeledInput onChange={updateText} />
      <Button onClick={addTextToList}>Add</Button>
      <Button onClick={sortList}>Sort</Button>
    </Flex>
    <ul>
      {listElements}
    </ul>
  </div>);
}

export default SortedListWidget;