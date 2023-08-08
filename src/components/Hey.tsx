import * as React from 'react';
import { Button, Textarea } from '@itwin/itwinui-react';
const [value, setvalue] = React.useState <string>("");

export default () => {
  const [List, setList] = React.useState<string[]>([]);

return (
    <div>
    <Textarea
      id='text-area'
      value={value}
      onChange={(event) => setvalue(event.target.value)}
      style={{ width: '70%' }}
    />
    </div>
   );
};