import { ColorDef } from "@itwin/core-common/lib/cjs/ColorDef";
import { ColorPickerButton } from "@itwin/imodel-components-react/lib/cjs/imodel-components-react/color/ColorPickerButton";
import { Button, Checkbox, Flex, LabeledInput } from "@itwin/itwinui-react";
import React from "react";
import Querycompt from "./Querycompt";


const Emphasizewidget = () => {

    return <div>
        <Flex flexDirection="column" >
            <Checkbox />
            <ColorPickerButton initialColor={ColorDef.blue} />
            <Button>Remove</Button>
            <LabeledInput />
            <Button>Add</Button>
            <Button>Emphasize</Button>
            <Button>Clear</Button>
            
        </Flex>
        <Querycompt />
    </div>

};


export default Emphasizewidget