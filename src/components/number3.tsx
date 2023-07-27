import * as React from 'react';
import { Button, Flex } from '@itwin/itwinui-react';

export default () => {
  const [myList, setMyList] = React.useState<string[]>([]);
  function addListItem(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const myNewList = [...myList];
    myNewList.push("test");
    setMyList(myNewList);
  }

  React.useEffect(() => {
  }, [myList]);

  const listElements: JSX.Element[] = [];
  myList.forEach((value:string) => {
    listElements.push(<Button onClick={addremove}>Remove</Button>)
  });
  return (      <Flex flexDirection='column' alignItems='flex-start'>
      <Button onClick={addListItem}>Add Button</Button>

      <ul>
      {listElements}
    </ul>
      
        </Flex>
  );
  function addremove(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const myNewList = [...myList];
    myNewList.pop();
    setMyList(myNewList);
   
  }
 
};

const ActionWidget = () => {
  const [myList, setMyList] = React.useState<string[]>([]);

  function addListItem(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const myNewList = [...myList];
    myNewList.push("test");
    setMyList(myNewList);
  }

  React.useEffect(() => {
  }, [myList]);

  const listElements: JSX.Element[] = [];
  myList.forEach((value:string) => {
    listElements.push(<li>value</li>)
  });

  return (<div>
    <h1>some text</h1>
    <Button onClick={addListItem}>Action</Button>
    <ul>
      {listElements}
    </ul>
  </div>
  )
}
