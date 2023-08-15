import { KeySet } from "@itwin/presentation-common";
import { ISelectionProvider, Presentation, SelectionChangeEventArgs } from "@itwin/presentation-frontend";
import { clearEmphasis, emphasizeElements } from "./EmphasizeCode";
import React from "react";

const DebugWidget = () => {
  const [selectedElements, setSelectedElements] = React.useState<Readonly<KeySet>>(new KeySet([]));
  
  const _onSelectionChanged=(evt: SelectionChangeEventArgs, selectionProvider: ISelectionProvider) => {
      const selection = selectionProvider.getSelection(evt.imodel, evt.level);
      setSelectedElements(new KeySet(selection));
    };
    Presentation.selection.selectionChange.addListener(_onSelectionChanged);
  
    function HoverSelected(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void {
  emphasizeElements ([event.currentTarget.innerText])
}

  function HoverDeselect(_event: React.MouseEvent<HTMLLIElement, MouseEvent>): void {
    clearEmphasis ()
  }
  function ClassSelected(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    const elements = selectedElements.instanceKeys.get(event.currentTarget.innerText.slice(0, -1))
    if(elements)
    emphasizeElements ([...elements])
    }
function ClassDeselect(_event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
  clearEmphasis ()
}


    const selected: JSX.Element[] = [];
    selectedElements.instanceKeys.forEach((value: Set<string>, key: string) => {
      const elements:JSX.Element[] = [];
      value.forEach((v: string) => {elements.push(<li onMouseEnter={HoverSelected} onMouseLeave={HoverDeselect}>{v}</li>)})
      selected.push(<div> <div onMouseEnter={ClassSelected} onMouseLeave={ClassDeselect}>{key}:</div><ul>{elements}</ul></div>);
    })

   

    return (<div>
      {selected}
    </div> 
    )
  }

export default DebugWidget;


