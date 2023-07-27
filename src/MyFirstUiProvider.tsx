import {
  StagePanelLocation,
  StagePanelSection,
  UiItemsProvider,
  Widget,
} from '@itwin/appui-react';
import DebugWidget  from './components/DebugWidget';
import TextBoxWidget from './components/TextBoxWidget';
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