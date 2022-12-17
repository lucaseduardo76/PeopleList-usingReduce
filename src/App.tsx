import { ChangeEvent, useState } from "react"
import { stateInput, useList } from "./reducers/peoplList"



const App = () => {
  var [name, setName] = stateInput()

  const [state, dispatch] = useList()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const increse = () => {
    
    dispatch({
      type: 'ADD',
      payload: {
        name: name
      }
    });

    setName('')
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={increse}>ADICIONAR</button>
      <br />

      <div>
        <ul>
          {state.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>



    </div>
  )
}

export default App