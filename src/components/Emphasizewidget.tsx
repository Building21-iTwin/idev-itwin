import React from "react";
import { Button, Flex } from "@itwin/itwinui-react";
import { ColorDef } from "@itwin/core-common/lib/cjs/ColorDef";
import Querycompt, { Queryprops } from "./querycompt";
import { QueryError, clearEmphasis, updateEmphasis } from "./EmphasizeCode";

const Emphasizewidget = () => {
    const [queryList, SetQueryList] = React.useState<Queryprops[]>([]);
    const [count, setCount] = React.useState<number>(0);

    function addQuery(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void{
        const newQueryList = [...queryList];
        newQueryList.push({id: count, enabled: false, color: ColorDef.blue, query:""});
        SetQueryList(newQueryList);
        setCount(count+1);
    }

    function queryChanged(_newProps: Queryprops): void {
        const newList = queryList.map((q: Queryprops) => {
            if (q.id === _newProps.id) {
                return _newProps;
            }
            return q;
        });
        SetQueryList(newList);
    }

    function removedclick(id: number): void {
        const newList = queryList.filter ((q: Queryprops) => {
            return q.id !== id;
        });
        SetQueryList(newList);
    }


    async function emphasizeQuery(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
        const queryErrors = await updateEmphasis (queryList);
        const newList = queryList.map((q:Queryprops) => {
            const e = queryErrors.find((qe: QueryError) => { return qe.id === q.id});
            if(e) {
                return {...q, valid:false, errormessage: e.message}
            }
            return {...q, valid:true, errormessage: ""}
        })
    SetQueryList(newList);
}

    const queryElements: JSX.Element[] = [];
    queryList.forEach((p: Queryprops) => {
        queryElements.push(<Querycompt key={p.id} props={p} handleChange={queryChanged} removeClick={removedclick} />)
    });

    function clearQuery(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
       clearEmphasis ()
    }

     return (<div style={{ padding: '5px 5px 5px 5px' }}>
        <Flex flexDirection="row">
            <Button styleType='high-visibility' onClick={addQuery}>Add</Button>
            <Button styleType='default' onClick={ emphasizeQuery}>Emphasize</Button>
            <Button styleType='default' onClick= { clearQuery}>Clear</Button>
        </Flex>

        <Flex flexDirection="column">
            {queryElements}
        </Flex>
        <p>
        <small><b>Add Button: Creates a list of queries in the form of a text box on the right, 
            a check box which opens and closes the text box so the user can properly right text in it, a color box that allows the user to 
            change the color of the text within the text box, and a remove button which removes the query that the add button created</b></small>
        </p>
        <p><small><b>
            Emphasize Button: Allows the use to change the properties of a selected item in the 3d model. 
            This is done by selecting an item in the 3d model, viewing its Generic:PhysicalObject: in the Debug Widget. 
            Then, type in: Select EcInstanceId From Generic:PhysicalObject. This changes the color of the selected part of the 3d model
        </b></small></p>
        <p>
        <small><b>
            Clear Button: Clears the color of the highlighted object inside the 3d Model Viewer
        </b></small>
        </p>
    </div>);
};
export default Emphasizewidget