import {
  StagePanelLocation,
  StagePanelSection,
  UiItemsProvider,
  Widget,
} from '@itwin/appui-react';
import Number3 from './components/number3';
import DebugWidget  from './components/DebugWidget';
import Waffle from './components/Waffle';
import TextBoxWidget from './components/TextBoxWidget';
import Togglewidget  from './components/Togglewidget';
import Emphasizewidget from './components/Emphasizewidget';


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


    const AB: Widget = {
      id: 'Add Button',
      label:'Add Button', 
      content: <Number3/>
      }
      widgets.push(AB);
      

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


const EW: Widget = {
  id: 'EmphasizeWidget',
  label: 'EmphasizeWidget',
  content: <Emphasizewidget/>
}

widgets.push(EW)

    return widgets;

   
  }

}
