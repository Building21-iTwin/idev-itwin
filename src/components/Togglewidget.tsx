import { KeySet } from "@itwin/presentation-common";
import { ISelectionProvider, Presentation, SelectionChangeEventArgs } from "@itwin/presentation-frontend";
import React, { ChangeEvent } from "react";
import { ToggleSwitch, Flex } from '@itwin/itwinui-react';
import { Button,  } from '@itwin/itwinui-react';
import { Checkbox,  } from '@itwin/itwinui-react';


const ToggleWidget = () => {
    const [selectedElements, setSelectedElements] = React.useState<Readonly<KeySet>>(new KeySet([]));
    const [disable, setdisable] = React.useState<boolean>(false);

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
      
 
  const [checkBoxEanbled, setCheckBoxEnabled] = React.useState<boolean>(false);
  const [Buttonclicked, setButtonclicked] = React.useState<boolean>(false);

  function toggleToggled(event: React.ChangeEvent<HTMLInputElement>): void {
    setCheckBoxEnabled(event.target.checked);

  }

  function checkboxchecked(event: ChangeEvent<HTMLInputElement>): void {
    setButtonclicked(event.target.checked)
  }

  

  

  
  

  function Done(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setButtonclicked(false)
    setCheckBoxEnabled(false)
  }

  return (<div>
    <ToggleSwitch label="Toggle to enable checkbox" defaultChecked={false} onChange={toggleToggled} />
    <Checkbox disabled={!checkBoxEanbled} onChange={checkboxchecked}/> 
    <Button disabled={!Buttonclicked} onClick={Done}>Disabled</Button>
  </div>);
      
    }
  
export default ToggleWidget


 