import * as React from 'react';
import { Button, Textarea } from '@itwin/itwinui-react';
import { Checkbox, Flex } from '@itwin/itwinui-react';
import { ColorPickerButton } from '@itwin/imodel-components-react';
import { ColorDef } from '@itwin/core-common';

const Querycompt = () => {
    const [value, setvalue] = React.useState<string>("");
    return (<div>
        <Flex>
            <Checkbox />
            <ColorPickerButton initialColor={ColorDef.blue} />
            <Textarea
                id='text-area'
                value={value}
                onChange={(event) => setvalue(event.target.value)}
                style={{ width: '70%' }}
            />
        </Flex>
    </div>)
};
export default Querycompt

