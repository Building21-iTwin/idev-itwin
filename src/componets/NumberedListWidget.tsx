import { Button } from "@itwin/itwinui-react";
import React from "react";




const NumberedListWidget = () => {
  const [entries, setEntries] = React.useState<number[]>([]);


  function addEntry(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const newEntries = [...entries];
    newEntries.push(entries.length);
    setEntries(newEntries);
  }

  const listElements: JSX.Element[] = [];
  entries.forEach((value: number) => {
    listElements.push(<li>{value}<Button id={value.toString()}>Remove</Button></li>)
  })

  return (<div>
    <Button onClick={addEntry}>Add</Button>
    <ul>
      {listElements}
    </ul>
  </div>);
}

export default NumberedListWidget;