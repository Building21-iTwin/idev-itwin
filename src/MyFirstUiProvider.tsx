import {
  StagePanelLocation,
  StagePanelSection,
  UiItemsProvider,
  Widget,
} from '@itwin/appui-react';
import DebugWidget  from './components/DebugWidget';
import Emphasizewidget from './components/Emphasizewidget';
import React from 'react';

export class MyFirstUiProvider implements UiItemsProvider {
  public readonly id = 'HelloWorldProvider';
  public provideWidgets(
    _stageId: string,
    _stageUsage: string,
    _location: StagePanelLocation,
    _section?: StagePanelSection
  ): ReadonlyArray<Widget> {
    
    const widgets: Widget[] = [];
    if (_location === StagePanelLocation.Left) {
      const DW: Widget = {
        id: 'DebugWidget',
        label:'DebugWidget', 
        content: <DebugWidget/>
      }
      widgets.push(DW)
    }
    
    if(_location === StagePanelLocation.Bottom){
      const EW: Widget = {
        id: 'EmphasizeWidget',
        label: 'EmphasizeWidget',
        content: <Emphasizewidget/>
      }
      widgets.push(EW) 
    }
    
    return widgets;

  }

}
