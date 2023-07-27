import {
  StagePanelLocation,
  StagePanelSection,
  UiItemsProvider,
  Widget,
} from '@itwin/appui-react';

import React from 'react';
import { KeySet } from '@itwin/presentation-common';
import { ISelectionProvider, Presentation, SelectionChangeEventArgs } from '@itwin/presentation-frontend';
import { text } from 'stream/consumers';
import { LabeledInput } from '@itwin/itwinui-react';
import Number3 from './components/number3';

import DebugWidget  from './components/DebugWidget';
import TextBoxWidget from './components/TextBoxWidget';
import Togglewidget  from './components/Togglewidget';
import React from 'react';

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

export class MyFirstUiProvider implements UiItemsProvider {
  public readonly id = 'HelloWorldProvider';
  public provideWidgets(
    _stageId: string,
    stageUsage: string,
    location: StagePanelLocation,
    section?: StagePanelSection
  ): ReadonlyArray<Widget> {
    const widgets: Widget[] = [];

    const DW: Widget = {
    id: 'DebugWidget',
    label:'DebugWidget', 
    content: <DebugWidget/>
    }
    widgets.push(DW);


    const AB: Widget = {
      id: 'Add Button',
      label:'Add Button', 
      content: <Number3/>
      }
      widgets.push(AB);
      return widgets;

    const TBW: Widget = {
      id: 'TextBoxWidget',
      label:'TextBoxWidget', 
      content: <TextBoxWidget/>
      }
      widgets.push(TBW);

    const TW: Widget = {
      id: 'ToggleWidget',
      label:'ToggleWidget', 
      content: <Togglewidget/>
    }
      widgets.push(TW);

    return widgets;

   
  }

}
