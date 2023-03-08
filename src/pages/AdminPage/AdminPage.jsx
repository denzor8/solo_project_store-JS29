import React, { useState } from "react";
import Header from '../../components/adminPanel/Header/HeaderAdmin';
import AdminList from "../../components/adminPanel/AdminList/AdminList";
import Filter from "../../components/FilterCategory/FilterCategory.jsx";
const AdminPage = () => {
	const [page, setPage] = useState(1);
	return (
		<>
			<Header />
			<Filter setPage={setPage} />
			<AdminList page={page} setPage={setPage} />
		</>
	);
};

export default AdminPage;