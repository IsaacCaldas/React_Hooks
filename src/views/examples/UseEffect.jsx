import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

import './UseEffect.css'

function calcFactorial(n){
	if (n < 0) return -1;
	if(n == 0) return 1;
	return calcFactorial(n - 1) * n;
}

const UseEffect = (props) => {

	// Ex 01
	const [num, setNum] = useState(0);
	const [factorial, setFactorial] = useState(1);

	useEffect(function(){
		setFactorial(calcFactorial(num));
	}, [num]);

	useEffect(function() {
		if(num > 170) {
			document.title = "Ao infinito e além!";
		} else {
			document.title = "React Hooks";
		}
	});

	// Challenge
	const [status, setStatus] = useState("Par");

	useEffect(function() {
		setStatus(num % 2 === 0 ? 'Par' : 'Ímpar');
	}, [num]);

	return (
		<div className="UseEffect">
			<PageTitle
				title="Hook UseEffect"
				subtitle="Permite executar efeitos colaterais em componentes funcionais!"
			/>
			<SectionTitle title="Exercise useEffect - 01" />
			<div className="center">
				<div>
					<span className="text">Fatorial: </span>
					<span className="text red">{factorial === -1 ? 'Não existe' : factorial}</span>
				</div>
				<input type="number" className="input"
					value={num} onChange={e => setNum(e.target.value) } />
			</div>
			<SectionTitle title="Challenge useEffect" />
			<div>
				<span className="text">O número digitado: <strong>{num}</strong>  é <strong>{status}</strong>.</span>
		</div>
		</div>
	)
}

export default UseEffect;
