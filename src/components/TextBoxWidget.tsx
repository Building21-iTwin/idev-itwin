import * as React from "react";
import { LabeledInput } from '@itwin/itwinui-react';
import { Button, Flex } from '@itwin/itwinui-react';

export default () => {
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
        if (previous !== undefined){
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
