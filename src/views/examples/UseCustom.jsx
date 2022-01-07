import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

import { useCounter } from '../../customHooks/useCounter';

const UseRef = (props) => {

	const [count, inc, dec] =	useCounter(10); // o hook inicia com o initialvalue = 0, mas se quiser mudar pode colocar o número inicial no parâmetro.

	return (
		<div className="UseCustom">
			<PageTitle
				title="Seu Hook"
				subtitle="Vamos aprender como criar o nosso próprio Hook!"
			/>
			<SectionTitle title="myHook - 01" />
			<div className="center">
				<h1 className='red'>{count}</h1>
				<div>
					<button className="btn" onClick={() => dec()}>-1</button>
					<button className="btn" onClick={() => inc()}>+1</button>
				</div>
			</div>
		</div>
	)
}

export default UseRef;
