import {
  StagePanelLocation,
  StagePanelSection,
  UiItemsProvider,
  Widget,
} from '@itwin/appui-react';
import DebugWidget from './componets/DebugWidget';
import ActionWidget from './componets/ActionWidget';
import BananaWidget from './componets/BananaWidget';
import TextRunWidget from './componets/TextRunWidget';
import SortedListWidget from './componets/SortedListWidget';
import NumberedListWidget from './componets/NumberedListWidget';


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

    const actionWidget: Widget = {
      id:'actionwidget',
      label: 'actions!',
      content: <ActionWidget/>
    }
    widgets.push(actionWidget);
    const bananaWidget: Widget = {
      id: 'bananda',
      label: 'banana!',
      content: <BananaWidget/>
    }
    widgets.push(bananaWidget);

    const textRunWidget: Widget = {
      id: 'textRun',
      label: 'Text Run',
      content: <TextRunWidget/>
    }
    widgets.push(textRunWidget);

    const sortListWidget: Widget = {
      id: 'sortList',
      label: 'Sort List',
      content: <SortedListWidget />
    }
    widgets.push(sortListWidget);

    const numberedListWidget: Widget = {
      id: 'numberedList',
      label: 'Numbered List',
      content: <NumberedListWidget />
    }
    widgets.push(numberedListWidget);
    return widgets;
  }
}