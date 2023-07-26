import { LabeledInput } from "@itwin/itwinui-react";
import { KeySet } from "@itwin/presentation-common";
import { ISelectionProvider, Presentation, SelectionChangeEventArgs } from "@itwin/presentation-frontend";
import React from "react";

const DebugWidget = () => {
  const [selectedElements, setSelectedElements] = React.useState<Readonly<KeySet>>(new KeySet([]));
  
  const _onSelectionChanged=(evt: SelectionChangeEventArgs, selectionProvider: ISelectionProvider) => {
      const selection = selectionProvider.getSelection(evt.imodel, evt.level);
      setSelectedElements(new KeySet(selection));
    };
    Presentation.selection.selectionChange.addListener(_onSelectionChanged);
  
    const selected: JSX.Element[] = [];
    selectedElements.instanceKeys.forEach((value: Set<string>, key: string) => {
      const elements:JSX.Element[] = [];
      value.forEach((v: string) => {elements.push(<li>{v}</li>)})
      selected.push(<div>{key}:<ul>{elements}</ul></div>);
    })
    
    return (<div>
      {selected}
    </div> 
    )
  }

export default DebugWidget;