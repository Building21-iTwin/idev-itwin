import { KeySet } from "@itwin/presentation-common";
import { ISelectionProvider, Presentation, SelectionChangeEventArgs } from "@itwin/presentation-frontend";
import * as React from "react";
import { LabeledInput } from '@itwin/itwinui-react';
import { Button, Flex } from '@itwin/itwinui-react';

const TextBoxWidget = () => {
  const [selectedElements, setSelectedElements] = React.useState<Readonly<KeySet>>(new KeySet([]));
  const _onSelectionChanged=(evt: SelectionChangeEventArgs, selectionProvider: ISelectionProvider) => {
     const selection = selectionProvider.getSelection(evt.imodel, evt.level);
     setSelectedElements(new KeySet(selection));
   };
   Presentation.selection.selectionChange.addListener(_onSelectionChanged);
  
   const selected: JSX.Element[] = [];
    selectedElements.instanceKeys.forEach((value: Set<string>, key: string) => {
      const elements:JSX.Element[] = [];
      value.forEach((v: string) => {elements.push(<li>{v}</li>)})
      selected.push(<div>{key}:<ul>{elements}</ul></div>);
   })
   
   return (<div>
     {selected}
   </div> 
   )
  }

export default () =>{
    const [inputtext, setinputtext] = React.useState<string>("");
    const [outputtext, setoutputtext] = React.useState<string>("");
    const [previousbutton, setpreviousbutton] = React.useState<string[]>([]);

    function run (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        setoutputtext(inputtext) 
        const newpreviousbutton = [...previousbutton];
        newpreviousbutton.push(inputtext)
        setpreviousbutton(newpreviousbutton);
      }

    function handleInputText(event: React.KeyboardEvent<HTMLInputElement>): void {
        setinputtext(event.currentTarget.value);
    }
    function clear (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        setoutputtext("");
    }
    function previous (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        const newpreviousbutton = [...previousbutton];
        const previous = newpreviousbutton.pop()
        setpreviousbutton(newpreviousbutton);
        if (previous != undefined){
            setoutputtext(previous);
        }
      
    }
return(
    <>
    <LabeledInput onKeyUpCapture= {handleInputText} defaultValue={"charge"} label='Text' placeholder='PlaceHolder' message='Hint message' />
    <Flex>
    <Button onClick = {run}>Run</Button> 
    <Button onClick={clear}>Clear</Button>
    <Button onClick={previous}>previous</Button>
    </Flex>
    <LabeledInput value={outputtext}  label='Text' placeholder='PlaceHolder' message='Hint message' />
    </>
  );
};
