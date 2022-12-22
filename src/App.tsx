import { ChangeEvent, useState } from "react"
import { stateInput, useList } from "./reducers/peoplList"



const App = () => {
  const [name, setName] = stateInput()

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

  const takeOut = (id: string) => {
    dispatch({
      type: 'DEL',
      payload: {
        id: id
      }
    });

    
  }

  const organize = () =>{
    dispatch({
      type: 'REORDER'
    })
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={increse}>ADICIONAR</button>
      <button onClick={organize}>REODERNAR</button>
      <br />

      <div>
        <ul>
          {state.map((item, index) => (

            <li key={index}>
              {item.name}
              <button className="list-button" key={index} onClick={() => takeOut(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>



    </div>
  )
}

export default App