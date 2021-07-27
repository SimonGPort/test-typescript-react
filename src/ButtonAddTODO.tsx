import React, {ChangeEvent, useState} from 'react';

//Comment passer un function en props au children
interface FuncProps{
    displayNewTODO(arg:string):void
}

const ButtonAddTODO : React.FC<FuncProps>=({displayNewTODO})=>{

    const [TODOField,setTODOField]=useState<string>("")

  return (
    <>
     <div style={{display:"flex", marginLeft:"15px"}}>
     <input 
     value={TODOField}
     onChange={(e:ChangeEvent<HTMLInputElement>)=>{setTODOField(e.target.value)}}/> 
     <button style={{marginLeft:"15px"}}  onClick={()=>{
    if(TODOField!==""){
displayNewTODO(TODOField)
setTODOField("");
    }
    }}>Add </button>
     </div>

    </>
  );
}

export default ButtonAddTODO;