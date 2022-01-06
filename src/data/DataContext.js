import React from "react";

export const data = {
  name: 'apple',
  number: 123,
  text: 'Context API.',
}

export const DataContext = React.createContext(null);

export default DataContext;
/* 

  O hook useContext(), ele pega um OBJETO DE CONTEXTO e retorna o valor contido no contexto.

  O OBJETO DE CONTEXTO criado por React.createContext é a constante DataContext

*/