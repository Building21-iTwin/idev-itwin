import { Button, Checkbox, ToggleSwitch } from "@itwin/itwinui-react";
import React from "react";

const BananaWidget = () => {
  const [toggleToggled, setToggleToggled] = React.useState<boolean>(false);
  const [checkBoxEnabled, setCheckBoxEnabled] = React.useState<boolean>(false);
  const [checkBoxChecked, setCheckBoxChecked] = React.useState<boolean>(false);
  const [buttonEnabled, setButtonEnabled] = React.useState<boolean>(false);

  function toggleChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    setCheckBoxEnabled(event.target.checked);
    setToggleToggled(event.target.checked);
  }

  function disableEverything(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setToggleToggled(false);
    setCheckBoxEnabled(false);
    setCheckBoxChecked(false);
    setButtonEnabled(false);
  }

  function checked(event: React.ChangeEvent<HTMLInputElement>): void {
    setButtonEnabled(event.target.checked);
    setCheckBoxChecked(event.target.checked);
  }

  return (<div>
    <ToggleSwitch checked={toggleToggled} label="Toggle to enable checkbox" defaultChecked={false} onChange={toggleChanged} />
    <Checkbox checked={checkBoxChecked} onChange={checked} disabled={!checkBoxEnabled} />
    <Button onClick={disableEverything} disabled={!buttonEnabled}>Disable</Button>
  </div>);

}

export default BananaWidget;