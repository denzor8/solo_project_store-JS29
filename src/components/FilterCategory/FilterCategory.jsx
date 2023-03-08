import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import { useProducts } from "../../contexts/ProductContextProvider";
import { useSearchParams } from 'react-router-dom';

const FilterCategory = ({ setPage }) => {
	const { products, getProducts, fetchByParams } = useProducts();
	const [searchParams, setSearchParams] = useSearchParams();
	const [search, setSearch] = useState(searchParams.get('q') || '');
	useEffect(() => {
		setSearchParams({
			q: search
		})
	}, [search])

	useEffect(() => {
		getProducts();
		setPage(1);
	}, [searchParams])
	return (
		<>
			<Navbar expand="lg">
				<Container className='mr-50 ml-50'>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					{/* filter po categori */}
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<NavDropdown
								onChange={e => fetchByParams('type', e.target.value)}
								title="Категория"
								id="basic-nav-dropdown" >
								<NavDropdown.Item
									href="?q=">
									All
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item
									href="?q=electronics">
									Electonics
								</NavDropdown.Item>
								<NavDropdown.Item
									href="?q=sneakers">
									Sneakers</NavDropdown.Item>
								<NavDropdown.Item
									href="?q=clothes">
									Clothes
								</NavDropdown.Item>
								<NavDropdown.Item
									href="?q=sport"
								>
									Sport
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
					{/* filter po categori */}

					<div className="search-block d-flex ">
						<img src="/img/search.svg" alt="Search" />
						<input
							value={search}
							onChange={e => setSearch(e.target.value)}
							placeholder="Поиск..." />
					</div>
				</Container>
			</Navbar>
		</>
	)
}

export default FilterCategory