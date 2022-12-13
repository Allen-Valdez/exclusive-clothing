import { Outlet } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { IoSearchSharp, IoPersonOutline, IoBagOutline } from 'react-icons/io5';
import './navigation.css';

const Navigation = () => {
	return (
		<>
			<div className='NavBar'>
				<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' className='py-3' fixed='top'>
					<Container fluid>
						<Navbar.Brand href='/' id='brandName'>
							Exclusive
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='responsive-navbar-nav' />
						<Navbar.Collapse id='responsive-navbar-nav'>
							<Nav className='me-auto'>
								<Nav.Link href='new'>New</Nav.Link>
								<Nav.Link href='women'>Women</Nav.Link>
								<Nav.Link href='men'>Men</Nav.Link>
								<Nav.Link href='shoes'>Shoes</Nav.Link>
								<Nav.Link href='accessories'>Accessories</Nav.Link>
								<Nav.Link href='made-for-you'>Made for you</Nav.Link>
								<Nav.Link href='about-us'>About us</Nav.Link>
							</Nav>
							<Nav className='nav-right'>
								<Nav.Link href='/search'>
									<IoSearchSharp />
								</Nav.Link>
								<NavDropdown title={<IoPersonOutline />} id='collasible-nav-dropdown'>
									<NavDropdown.Item href='#action/3.1'>My Account</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.2'>Orders & Returns</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.3'>My Points and Rewards</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.3'>Check Gift Card Balances</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action/3.4'>International Shipping</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action/3.4'>Sign Out</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link href='/cart' className='mr-5'>
									<IoBagOutline />
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
