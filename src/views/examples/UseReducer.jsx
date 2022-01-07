import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

import { initialState, reducer } from '../../store/config';
import { add2Number, login } from '../../store/actions';

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
					<button className="btn" onClick={() => login(dispatch, 'Isaac')}>Log In</button>
				</div> {/* payload: generic name to datas */}
				<span className="text">{state.number}</span>
				<div>
					<div>
						<button className="btn" onClick={() => dispatch({type: 'numAddN', payload: -5})}>-5</button>
						<button className="btn" onClick={() => dispatch({type: 'numAddN', payload: 5})}>+5</button>
					</div>
					<button className="btn" onClick={() => add2Number(dispatch)}>+2</button>
					<button className="btn" onClick={() => dispatch({type: 'x7Number'})}>x7</button>
					<button className="btn" onClick={() => dispatch({type: 'div25Number'})}>/25</button>
					<button className="btn" onClick={() => dispatch({type: 'parseToIntNumber'})}>Para inteiro</button>
				</div>
				
			</div>
		</div>
	);
}

export default UseReducer
