import React, { useState, useEffect, useMemo } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function sum(a, b) {
	const future = Date.now + 2000;//ms
	// 	while(Date.now < future){}//espera 2s
	return a + b;
}

const UseMemo = (props) => {

	const [n1, setN1] = useState(0);
	const [n2, setN2] = useState(0);
	const [n3, setN3] = useState(0);

	const result = useMemo(() => sum(n1, n2), [n1, n2]); // primeiro parâmetro função, segundo param: dependencias (igual useEffect)
	
	{/* Faz com que o n3, não espere os 2 segundos, assim a função sum só será chamada quando realmente o n1 ou o n2 sofrer alteração. 
		Isso é uma alternativa usando useState com useEffect
	
		const [result, setResult] = useState(0);

		useEffect(function() { 
			setResult(sum(n1, n2));
		}, [n1, n2]);
	*/}


	return (
		<div className="UseMemo">
			<PageTitle
				title="Hook UseMemo"
				subtitle="Retorna um valor memoizado!"
		/>
			<SectionTitle title="Exercise useMemo - 01" />

			<div className="center">
				<span className="text">{result}</span>
				<input type="number" className="input" value={n1} onChange={e => setN1(parseInt(e.target.value))}/>
				<input type="number" className="input" value={n2} onChange={e => setN2(parseInt(e.target.value))}/>
				<input type="number" className="input" value={n3} onChange={e => setN3(parseInt(e.target.value))}/>
			</div>
		</div>
	)
}

export default UseMemo
