import {
  StagePanelLocation,
  StagePanelSection,
  UiItemsProvider,
  Widget,
} from '@itwin/appui-react';
import DebugWidget  from './components/DebugWidget';
import Waffle from './components/Waffle';
import Togglewidget  from './components/Togglewidget';


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

    const W: Widget = {
      id:'Waffle',
      label:'Waffle',
      content: <Waffle/>
    }
    widgets.push(W)

    const TW: Widget = {
      id: 'ToggleWidget',
      label:'ToggleWidget', 
      content: <Togglewidget/>
    }
    widgets.push(TW);

    return widgets;

   
  }
}