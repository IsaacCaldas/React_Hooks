import React, { useState } from 'react'

const initialState = {
  title: 'Context API + Hooks',
  name: 'Fifty',
  number: 10
}

export const AppContext = React.createContext(initialState);

const Store = props => {

  const [state, setState] = useState(initialState);

  function updateState(key, value){
    setState({
      ...state,
      [key]: value
    });
  }

  return (
    <AppContext.Provider value={{
      title: state.title,
      name: state.name,
      number: state.number,
      setText: n => updateState('text', n),
      setName: n => updateState('name', n),
      setNumber: n => updateState('number', n),
    }}>
      {props.children}
    </AppContext.Provider>
  );

}

export default Store;