import React from "react";
import { Button, Textarea } from '@itwin/itwinui-react';                

const querycompt = () => { const [value, setvalue] = React.useState <string>("");
return (<div><Textarea
    id='text-area'
    value={value}
    onChange={(event) => setvalue(event.target.value)}
    style={{ width: '70%' }}
  /></div>);
};
export default querycompt
