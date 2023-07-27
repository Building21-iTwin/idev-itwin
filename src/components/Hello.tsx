import * as React from 'react';
import { Button, Textarea } from '@itwin/itwinui-react';

export default () => {
  const [List, setList] = React.useState<string[]>([]);
  const [value, setvalue] = React.useState <string>("");
  function run (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const newList = [...List];
    newList.push(value);
    setList(newList)
  }
function clear (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setvalue("");

  }
function sort (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const newList = [...List];
    newList.sort();
    setList(newList)
}  
  const elementlist: JSX.Element[] = []
  List.forEach ((t:string) =>{
    elementlist.push(<li>{t}</li>);
  })

  return (
    <div>
    <Textarea
      id='text-area'
      value={value}
      onChange={(event) => setvalue(event.target.value)}
      style={{ width: '70%' }}
    />
    <Button onClick = {run}>Run</Button>
    <Button onClick={clear}>Clear</Button>
    <Button onClick={sort}>Sort</Button>
    <ul>
        {elementlist}
    </ul>
    </div>
   );
};

