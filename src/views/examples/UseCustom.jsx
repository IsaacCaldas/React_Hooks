import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

import { useCounter } from '../../customHooks/useCounter';
import { useFetch } from '../../customHooks/useFetch';

const UseRef = (props) => {

	// useCounter(initialValue);
	const [count, inc, dec] =	useCounter(10); // o hook inicia com o initialvalue = 0, mas se quiser mudar pode colocar o número inicial no parâmetro.
	
	// useFetch(url, method);
	const url = 'http://files.cod3r.com.br/curso-react/estados.json';
	const response =	useFetch(url);

	function showBrazilStates(states){
		return states.map(state => 
			<li key={state.nome}>{state.nome} - <strong>{state.sigla}</strong></li>
		);
	}

	return (
		<div className="UseCustom">
			<PageTitle
				title="Seu Hook"
				subtitle="Vamos aprender como criar o nosso próprio Hook!"
			/>
			<SectionTitle title="myHook: useCounter - 01" />
			<div className="center">
				<h1 className='red'>{count}</h1>
				<div>
					<button className="btn" onClick={() => dec()}>-1</button>
					<button className="btn" onClick={() => inc()}>+1</button>
				</div>
			</div>

			<SectionTitle title="myHook: useFetch - 02" />
			<div className="center">
				<ul>
					{!response.loading ? showBrazilStates(response.data) : <h3 className='red'>Estados não encontrados.</h3>}
				</ul>
			</div>
		</div>
	)
}

export default UseRef;
