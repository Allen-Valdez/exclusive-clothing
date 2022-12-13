import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation';
import './App.css';
import Home from './routes/Home/Home';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
