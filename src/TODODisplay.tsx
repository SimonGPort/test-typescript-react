import React, { ChangeEvent, useState, useEffect } from 'react';

interface Props {
  listOfTODO: string[];
  removeTODO: (arg: number) => void;
}

const TODODisplay: React.FC<Props> = ({ listOfTODO, removeTODO }) => {

  const [TODOField, setTODOField] = useState<string[]>([])

  useEffect(() => {
    setTODOField(listOfTODO)
  }, [listOfTODO])

  useEffect(() => {
    renderTODO()
  }, [TODOField])


  const renderTODO = () => {
    let value = TODOField.map((elem, idx) => {
      return (
        <div key={idx} style={{ width: "200px", display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <div>
            {elem}
          </div>
          <button onClick={() => {
            removeTODO(idx);
          }}>
            Remove
          </button>
        </div>
      )
    })
    return value
  }

  return (
    <div style={{ marginLeft: "15px", marginTop: "15px" }}>
      {renderTODO()}
    </div>
  );
}

export default TODODisplay;