import React, { useState, useEffect } from "react";
import AdminPage from '../AdminPage/AdminPage'
const CheckAdmin = () => {
	const [currentUser, setCurrentUser] = useState({
		username: 'admin',
		password: 'pass123',
		isAdmin: false
	})
	const [userName, setInputValue] = useState('')
	const [password, setPassword] = useState('')

	function handlePassword(event) {
		setPassword(event.target.value);
	}
	function handleChange(event) {
		setInputValue(event.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (userName === currentUser.username && password === currentUser.password) {
			console.log("Значения равны");
			let updatedUser = { ...currentUser, isAdmin: true }
			setCurrentUser(updatedUser)
			localStorage.setItem("currentUser", JSON.stringify(updatedUser));
		} else {
			console.log("Значения не равны");
		}
	}
	useEffect(() => {
		const savedUser = JSON.parse(localStorage.getItem("currentUser"));
		if (savedUser) {
			setCurrentUser(savedUser);
		}
	}, []);
	return (
		<>
			{
				currentUser.isAdmin
					?
					<AdminPage />
					:
					<div className="login-page">
						<div className="login-box">
							<h2>Admin</h2>
							<form onSubmit={handleSubmit}>
								<div className="user-box">

									<input
										type="text"
										placeholder="Username"
										value={userName}
										onChange={handleChange}
									/>
									<label>Username</label>
								</div>
								<div className="user-box">

									<input
										type="password"
										placeholder="Password"
										value={password}
										onChange={handlePassword}
									/>
									<label>Password</label>
								</div>
								<button
									type="submit"
								>
									Login
								</button>
							</form>
						</div>
					</div>

			}
		</>
	)
}

export default CheckAdmin

