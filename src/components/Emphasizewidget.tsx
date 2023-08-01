import React from "react";
import { Button, Checkbox, Flex, LabeledInput } from "@itwin/itwinui-react";
import { ColorDef } from "@itwin/core-common/lib/cjs/ColorDef";
import { ColorPickerButton } from "@itwin/imodel-components-react/lib/cjs/imodel-components-react/color/ColorPickerButton";
import Querycompt from "./querycompt";
const Emphasizewidget = () => {

    return (<div>
        <Button>Add</Button>
        <Button>Emphasize</Button>
        <Button>Clear</Button>
        <Querycompt />
    </div>);
};
export default Emphasizewidget
