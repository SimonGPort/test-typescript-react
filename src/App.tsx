import React, { useState}  from 'react';
import ButtonAddTODO from './ButtonAddTODO';
import TODODisplay from './TODODisplay';

// React.FC
const App: React.FC = () => {
const [listOfTODO,setListOfTODO]=useState<string[]>([])

const displayNewTODO=(arg:string):void=>{
  let tempListOfTODO=[...listOfTODO]
  tempListOfTODO.push(arg)
  setListOfTODO(tempListOfTODO)
}

const removeTODO=(arg:number):void=>{
  let tempListOfTODO=[...listOfTODO]
  tempListOfTODO.splice(arg,1)
  setListOfTODO(tempListOfTODO)
}

  return (
    <>
    <div>
     TODO List, Typescript test
    </div>
    <ButtonAddTODO displayNewTODO={displayNewTODO}/>
    <TODODisplay listOfTODO={listOfTODO} removeTODO={removeTODO}/>

    </>
  );
}

export default App;
