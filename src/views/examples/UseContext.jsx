import React, { useContext } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

import DataContext from '../../data/DataContext';
import { AppContext } from '../../data/Store';

const UseContext = (props) => {

	const {state, setState} = useContext(DataContext);

	function addNumber(delta){
		setState({
			...state,
			number: state.number + delta
		});
	}
	function modName(newName){
		setState({
			...state,
			name: newName
		});
	}
	// Store.jsx
	const {number, title, name, setNumber } = useContext(AppContext);

	return (
		<div className="UseContext">
			<PageTitle
				title="Hook UseContext"
				subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
			/>
			<SectionTitle title="Exercise useContext - 01" />
			<div className="center">
				<span className="text"><strong>{state.title}</strong></span>
				<span className="text">{state.name}</span>
				<span className="text">{state.number}</span>

				<div>
					<button className="btn" onClick={() => addNumber(-1)}>-1</button>
					<button className="btn" onClick={() => addNumber(+1)}>+1</button>
				</div>

				<div>
					<span className="text">Digite um novo nome: </span>
					<input type="text" className="input" onChange={e => modName(e.target.value)}/>
				</div>
			</div>

			<SectionTitle title="Exercise useContext - 02" />
			<div className="center">
				<span className="text">{title}</span>
				<span className="text">{name}</span>
				<span className="text">{number}</span>
				<div>
					<button className="btn" onClick={() => setNumber(number -1)}>-1</button>
					<button className="btn" onClick={() => setNumber(number +1)}>+1</button>
				</div>
			</div>
		</div>
	)
}

export default UseContext;
