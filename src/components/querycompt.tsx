import * as React from 'react';
import { Button, Textarea } from '@itwin/itwinui-react';    
import { Checkbox, Flex } from '@itwin/itwinui-react';

const Querycompt = () => { const [value, setvalue] = React.useState <string>("");
return (<div>
 <Flex>  
 <Checkbox/>
 <Textarea
    id='text-area'
    value={value}
    onChange={(event) => setvalue(event.target.value)}
    style={{ width: '70%' }}
  />
 </Flex> 
</div>)
};
export default Querycompt

