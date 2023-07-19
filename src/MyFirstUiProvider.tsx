import {
  StagePanelLocation,
  StagePanelSection,
  StageUsage,
  UiItemsProvider,
  Widget,
} from '@itwin/appui-react';
import { ColorDef } from '@itwin/core-common';
import { IModelApp } from '@itwin/core-frontend';
import { ToggleSwitch } from '@itwin/itwinui-react';
import { KeySet } from '@itwin/presentation-common';
import { ISelectionProvider, Presentation, SelectionChangeEventArgs } from '@itwin/presentation-frontend';
import React from 'react';


const DebugWidget = () => {
  const [selectedElements, setSelectedElements] = React.useState<Readonly<KeySet>>(new KeySet([]));

  const _onSelectionChanged = (evt: SelectionChangeEventArgs, selectionProvider: ISelectionProvider) => {
    const selection = selectionProvider.getSelection(evt.imodel, evt.level);
    setSelectedElements(new KeySet(selection));
  };

  Presentation.selection.selectionChange.addListener(_onSelectionChanged);

  const selected: JSX.Element[] = [];
  selectedElements.instanceKeys.forEach( (value: Set<string>, key: string) => {
    const elements:JSX.Element[] = [];
    value.forEach((v: string) => {elements.push( <li>{v}</li>)})
    selected.push(<div>{key}: <ul>{elements}</ul></div>);
  })

  return (<div>
      {selected}
    </div>
  )
}

export class MyFirstUiProvider implements UiItemsProvider {
public readonly id = 'MyFirstProviderId';
public static toggledOnce: boolean = false;
public static originalColor: number;


public provideWidgets(
    _stageId: string,
    stageUsage: string,
    location: StagePanelLocation,
    section?: StagePanelSection
  ): ReadonlyArray<Widget> {
    const widgets: Widget[] = [];
    if (
      stageUsage === StageUsage.General &&
      location === StagePanelLocation.Right &&
      section === StagePanelSection.Start
    ) {
      const backgroundColorWidget: Widget = {
        id: 'BackgroundColorWidget',
        label: 'Background Color Toggle',
        content: <ToggleSwitch
        onChange={(e) => {
          if (MyFirstUiProvider.toggledOnce === false) {
            MyFirstUiProvider.originalColor =
              IModelApp.viewManager.selectedView!.displayStyle.backgroundColor.tbgr;
            MyFirstUiProvider.toggledOnce = true;
          }
          const color = e.target.checked
            ? ColorDef.computeTbgrFromString("skyblue")
            : MyFirstUiProvider.originalColor;
    
          IModelApp.viewManager.selectedView!.overrideDisplayStyle({
            backgroundColor: color,
          });
        }}
      /> 
      };
      widgets.push(backgroundColorWidget);
      widgets.push({
        id: "DebugWidget",
        label: "Debug Widget",
        content: <DebugWidget/>
      });
  }
  return widgets;
}
}