import { ColorDef } from "@itwin/core-common/lib/cjs/ColorDef";
import { ColorPickerButton } from "@itwin/imodel-components-react/lib/cjs/imodel-components-react/color/ColorPickerButton";
import { Flex, Button } from "@itwin/itwinui-react";
import React from "react";

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
  </Flex>)  
}

export default ColorAndButton