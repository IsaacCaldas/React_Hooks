import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const initialState = {
	cart: [],
	products: [],
	user: null,
	//foco no number
	number: 0
}

function reducer(state, action){

	switch (action.type){
		// multiply 7, div 25, parseInt actualNum
		case 'add2Number':
			return {...state, number: state.number + 2};
			break;
		case 'x7Number':
			return {...state, number: state.number * 7};
			break;
		case 'div25Number':
			return {...state, number: state.number / 25};
			break;
		case 'parseToIntNumber':
			return {...state, number: parseInt(state.number)};
			break;
		case 'numAddN':
			return {...state, number: state.number + action.payload};
			break;

		case 'login':
			return {...state, user: {name: action.payload}};
			break;

		default:
			return state;
	}
}

const UseReducer = (props) => {

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="UseReducer">
			<PageTitle
				title="Hook UseReducer"
				subtitle="Uma outra forma de ter estado em componentes funcionais!"
			/>
			<SectionTitle title="Exercise useReducer - 01" />
			<div className="center">
				{state.user ? 
					<span className="text">
						<strong>{state.user.name}</strong> está logado. 
					</span> : <span className="text">Usuário anônimo.</span>
				}				
				<div>
					<button className="btn" onClick={() => dispatch({type: 'login', payload: 'Isaac'})}>Log In</button>
				</div> {/* payload: generic name to datas */}
				<span className="text">{state.number}</span>
				<div>
					<div>
						<button className="btn" onClick={() => dispatch({type: 'numAddN', payload: -5})}>-5</button>
						<button className="btn" onClick={() => dispatch({type: 'numAddN', payload: 5})}>+5</button>
					</div>
					<button className="btn" onClick={() => dispatch({type: 'add2Number'})}>+2</button>
					<button className="btn" onClick={() => dispatch({type: 'x7Number'})}>x7</button>
					<button className="btn" onClick={() => dispatch({type: 'div25Number'})}>/25</button>
					<button className="btn" onClick={() => dispatch({type: 'parseToIntNumber'})}>Para inteiro</button>
				</div>
				
			</div>
		</div>
	);
}

export default UseReducer
