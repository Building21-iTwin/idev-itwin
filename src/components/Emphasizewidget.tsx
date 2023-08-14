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
            const e = queryErrors.find((qe: QueryError) =>{ return qe.id === q.id});
            if(e) {
                return {...q, valed:false, errorMessage: e.message}
            }
            return{...q, valid:true, errorMessage:""}
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

     return (<div>
        <Flex style={{ padding: '5px 5px 5px' }} flexDirection="row">
            <Button styleType='cta' onClick={addQuery}>Add</Button>
            <Button styleType='cta' onClick={ emphasizeQuery}>Emphasize</Button>
            <Button styleType='cta' onClick= { clearQuery}>Clear</Button>
        </Flex>

        <Flex flexDirection="column">
            {queryElements}
        </Flex>

    </div>);
};
export default Emphasizewidget