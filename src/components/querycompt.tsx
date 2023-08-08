import * as React from 'react';
import { Button, Textarea } from '@itwin/itwinui-react';
import { Checkbox, Flex } from '@itwin/itwinui-react';
import { ColorDef } from '@itwin/core-common';
import { ColorPickerButton } from '@itwin/imodel-components-react';

export interface Queryprops {
    id: number;
    enabled: boolean;
    color: ColorDef;
    query: string;
}

export interface QueryComponentProps {
    props: Queryprops;
    handleChange(newProps: Queryprops): void;
    removeClick(id: number): void;
}

const Querycompt = ({
    props,
    handleChange,
    removeClick
}: QueryComponentProps) => {
    const [value, setvalue] = React.useState<string>(props.query);
    const [checkBoxChecked, setCheckBoxChecked] = React.useState<boolean>(props.enabled);
    const [color, setColor] = React.useState<ColorDef> (props.color);

    function remove(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        removeClick(props.id)
    };

    function checked(event: React.ChangeEvent<HTMLInputElement>): void {
        props.enabled = event.target.checked;
        handleChange(props);
        setCheckBoxChecked(event.target.checked);
    }

    function queryChanged(event: React.ChangeEvent<HTMLTextAreaElement>): void {
        setvalue(event.target.value);
        handleChange(props);
        props.query = event.target.value;
    }

    function colorChanged(color: ColorDef): void {
        props.color = color;
        handleChange(props);
        setColor(color);
    }
    

    return (<div>
        <Flex>
            <Checkbox checked={checkBoxChecked} onChange={checked}/>
            <Button onClick={remove}>Remove</Button>
            <ColorPickerButton initialColor={color} onColorPick={colorChanged}/>
            <Textarea
                id='text-area'
                value={value}
                onChange={queryChanged}
                style={{ width: '100%' }}
            />
        </Flex>
    </div>)
};


export default Querycompt