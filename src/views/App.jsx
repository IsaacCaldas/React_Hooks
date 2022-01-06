import './App.css';
import React from 'react';
import { BrowserRouter as Router } from  'react-router-dom';
import DataContext, { data } from '../data/DataContext'

import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';

const App = props => {
 
	return (
		<DataContext.Provider value={data}>
			<div className="App">
				<Router>
					<Menu />
					<Content />
				</Router>
			</div>
		</DataContext.Provider>
	)
}

export default App