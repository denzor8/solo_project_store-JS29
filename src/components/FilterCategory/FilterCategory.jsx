import React from 'react'
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap/';

const FilterCategory = () => {
	return (
		<>
		<Navbar expand="lg">
			<Container className='mr-50 ml-50'>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavDropdown title="Категория" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.2">
								Electonics
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Sneakers</NavDropdown.Item>

							<NavDropdown.Item href="#action/3.4">
								Clothes
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">
								Sport
							</NavDropdown.Item>
						</NavDropdown>

					</Nav>
				</Navbar.Collapse>
				<div className="search-block d-flex ">
					<img src="/img/search.svg" alt="Search" />
					<input placeholder="Поиск..." />
				</div>
			</Container>
		</Navbar>
	</>
	)
}

export default FilterCategory