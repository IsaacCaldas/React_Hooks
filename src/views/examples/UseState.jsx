import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {

	{/* Se não tivesse o destructor [count, setCount] teria que ser assim:
	const array = useState(0);
	const count = array[0];
	const setCount = array[1];
	*/}
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');

   return (
		<div className="UseState">
			<PageTitle
				title="Hook UseState"
				subtitle="Estado em componentes funcionais!"
			/>
			<SectionTitle title="Exercise useState - 01" />
			<div className="center">
				<span className="text">{count}</span>
				<div>
					<button className="btn" onClick={ () => setCount(count - 1) } >-1</button>
					<button className="btn"onClick={ () => setCount(count + 1) } >+1</button>
					<button className="btn" onClick={ () => setCount(count * 2) } >x2</button>
				</div>
				<div>
					<button className="btn"onClick={ () => setCount(0) } >Zerar</button>
					{/* Valor fixo */}
					<button className="btn"onClick={ () => setCount(1000) } >1000</button>
					{/* Passando função */}
					<button className="btn"onClick={ () => setCount(current => current + 1000) } >+1000</button>
				</div>
			</div>

			<SectionTitle title="Exercise useState - 02" />
			<input type="text" placeholder="Digite seu nome" className="input"
				value={name} onChange={e => setName(e.target.value)} />
			<span className="text">
				Seu nome é <strong>{name}</strong>.
			</span>
		</div>
	)
}

export default UseState
