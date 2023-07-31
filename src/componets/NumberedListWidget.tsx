import { Button } from "@itwin/itwinui-react";
import React from "react";




const NumberedListWidget = () => {
  const [count, setCount] = React.useState<number>(0);
  const [entries, setEntries] = React.useState<string[]>([]);


  function addEntry(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const newEntries = [...entries];
    newEntries.push(count.toString());
    setCount(count + 1);
    setEntries(newEntries);
  }

  function removeButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const buttonId = event.currentTarget.id;
    const newEntries = entries.filter((value: string) => {return value !== buttonId});
    setEntries(newEntries);
  }

  const listElements: JSX.Element[] = [];
  entries.forEach((value: string) => {
    listElements.push(<li>{value}<Button id={value} onClick={removeButton}>Remove</Button></li>)
  })

  return (<div>
    <Button onClick={addEntry}>Add</Button>
    <ul>
      {listElements}
    </ul>
  </div>);
}

export default NumberedListWidget;

