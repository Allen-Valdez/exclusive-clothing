import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Navigation />}>
					{/* <Route path='sign-in' /> */}
				</Route>
			</Routes>
		</div>
	);
}

export default App;
