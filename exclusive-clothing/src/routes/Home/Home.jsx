import { Container, Row, Col } from 'react-bootstrap';
import './home.css';
// import Suits from '../../assets/pexels-andrea-piacquadio-3755706.jpg';

const Home = () => {
	return (
		<section className='hero-section'>
			<Container>
				<Row>
					<Col className='hero-p'>
						<div className='hero-text text-center'>
							<h2 className='text-white fw-normal mg-4 mt-3 hero-title'>
								<b>It's not classy unless it's Exclusive</b>
							</h2>
							<p className='text-white hero-paragraph'>
								Here at exclusive clothing, we take pride in our tailor skills to make sure you look Exclusively you.
							</p>
							<button className='btn btn-outline-secondary text-white'>Shop Now</button>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Home;
