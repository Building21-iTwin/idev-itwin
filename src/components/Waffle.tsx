import * as React from 'react';
import { Button, Flex } from '@itwin/itwinui-react';
import { ColorDef } from '@itwin/core-common';
import { ColorPickerButton } from '@itwin/imodel-components-react';

export interface ColorAndButtonProps {
  initialColor: ColorDef;
  onColorChanged: (newColor: ColorDef) => void;
}

const ColorAndButton: React.FC<ColorAndButtonProps> = ({
  initialColor,
  onColorChanged,
}:ColorAndButtonProps) => {
const [Color, setColor] = React.useState<ColorDef>(ColorDef.blue);

function setColorCalled(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void{
  onColorChanged(Color);
}

function ColorChanged(newColor: ColorDef): void {
  setColor(newColor)
}


  return (<Flex>
    <ColorPickerButton initialColor={Color} onColorPick={ColorChanged} />
  <Button onClick={setColorCalled}>Set</Button>
  </Flex>)  
}
  
const Waffle = () => {
  const [colorList, setColorList] = React.useState<JSX.Element[]>([]) 
  const [myList, setMyList] = React.useState<ColorDef[]>([]);
  const [TextColor, setTextColor ] = React.useState<ColorDef>(ColorDef.red)
  function Leroy(newColor: ColorDef): void { 
  setTextColor (newColor);
  }
  function addListItem(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const mycolorList = [...colorList];
    const ColorList= getRandomColor();
    const randomColor = ColorDef.from(ColorList[0],ColorList[1],ColorList[2]);
    mycolorList.push(<ColorAndButton initialColor={randomColor} onColorChanged={Leroy}/>);
    setColorList(mycolorList);
  }
  function getRandomColor(){
    let ColorList =[]
    for (let i=0; i<3; i++){
   ColorList.push( Math.random() * (255 - 0) + 0)
    }
    return ColorList
  }

  React.useEffect(() => {
  }, [myList]);



  const textStyle = {color: TextColor.toHexString()};
  return (<div>
    <Flex flexDirection='column'>
   <h1 style={textStyle}>
    color
  </h1>
    <Button onClick={addListItem}>Add</Button>
    <ul>
    {colorList}
    </ul>
    </Flex>
      </div>
    )
  }
  
  export default Waffle;

