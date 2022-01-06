import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import UseCallbackButtons from './UseCallbackButtons';

const UseCallback = (props) => {

	const [count, setCount] = useState(0);

	const inc = useCallback(function(delta) {
		if(delta !== 0) {
			setCount(current => current + delta);
		} else {
			setCount(current => 0);
		}
	}, [setCount]); // Passará só uma vez a função para o componente filho para não renderizar várias vezes.

	return (
		<div className="UseCallback">
			<PageTitle
				title="Hook UseCallback"
				subtitle="Retorna uma função memoizada!"
			/>
			<SectionTitle title="Exercise useCallback- 01" />
			<div className="center">
				<span className="text">{count}</span>
				<UseCallbackButtons inc={inc} />
		</div>
		</div>
	)
}

export default UseCallback
