
import { ColorDef } from "@itwin/core-common";
import { ColorPickerButton } from "@itwin/imodel-components-react";
import { Button, Flex, LabeledInput } from "@itwin/itwinui-react";
import React from "react";

export interface ColorAndButtonProps {
  initialColor: ColorDef;
  onColorChanged: (newColor: ColorDef) => void;
}

const ColorAndButton: React.FC<ColorAndButtonProps> = ({
  initialColor,
  onColorChanged,
}:ColorAndButtonProps) => {
  const [color, setColor] = React.useState<ColorDef>(initialColor);

  function setColorCalled(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    onColorChanged(color);
  }

  function colorChanged(newColor: ColorDef): void {
    setColor(newColor);
  }

  return (
    <Flex>
      <ColorPickerButton initialColor={color} onColorPick={colorChanged} />
      <Button onClick={setColorCalled}>Set</Button>
    </Flex>
  );
}

const ActionWidget = () => {
  const [myList, setMyList] = React.useState<string[]>([]);
  const [inputText, setInputText] = React.useState<string>("");
  const [outputText, setOutputText] = React.useState<string>("Awaiting Text")
  const [textColor, setTextColor] = React.useState<ColorDef>(ColorDef.blue);
  const [colorList, setColorList] = React.useState<JSX.Element[]>([])

  function handleInputText(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputText(event.target.value);
  }

  function addListItem(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const myNewList = [...myList];
    myNewList.push("test");
    setMyList(myNewList);
  }

  function addText(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setOutputText(inputText);
  }

  function handleColorChanged (newColor: ColorDef): void {
    setTextColor(newColor);
  }

  function addColorButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const newColorList = [...colorList];
    newColorList.push(<ColorAndButton initialColor={ColorDef.blue} onColorChanged={handleColorChanged} />);
    setColorList(newColorList);
  }

  const textStyle = {color: textColor.toHexString()};

  return (<div>
    <h1 style={textStyle}>some text</h1>
    <Button onClick={addListItem}>Action</Button>
    <Button onClick={addColorButton}>Add</Button>
    <Flex>
      <LabeledInput onChange={handleInputText} defaultValue={"banana"} />
      <Button onClick={addText}>Run</Button>
    </Flex>
    <LabeledInput value={outputText} />
    <Flex flexDirection="column">
      {colorList}
    </Flex>
  </div>
  )
}

export default ActionWidget;