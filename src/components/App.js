import { React, useState, useEffect } from "react";
import GithubProfile from "./GithubProfile";
import Header from "./Header";

const App = () => {
	const [user, setUser] = useState("");
	const [userData, setUserData] = useState({});
	const [userRepos, setUserRepos] = useState([]);
	const [userCreated, setUserCreated] = useState({});
	const [isUserExist, setIsUserExist] = useState("empty");
	const [query, setQuery] = useState(user);

	const api = `https://api.github.com/users/${user}`;
	const apiRepos = `https://api.github.com/users/${user}/repos?sort=created`;

	const getUserData = async () => {
		const response = await fetch(api);

		if (response.ok) {
			setIsUserExist("true");
			const data = await response.json();
			setUserData(data);

			let date = await new Date(data.created_at);
			let month = date.getMonth();
			let day = date.getDate();
			let year = date.getFullYear();

			setUserCreated({
				month: month,
				day: day,
				year: year,
			});

			getUserRepos();
		} else {
			setIsUserExist("false");
		}
	};
	const getUserRepos = async () => {
		const response = await fetch(apiRepos);
		const data = await response.json();
		setUserRepos(data);
	};

	// useEffect(() => {

	// }, [query]);

	const updateSearch = (e) => {
		setUser(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		setQuery(user);
		getUserData();
	};

	return (
		<div className="App">
			<Header />
			<GithubProfile
				data={userData}
				repos={userRepos}
				userCreation={userCreated}
				query={query}
				user={user}
				updateSearch={updateSearch}
				handleSearch={handleSearch}
				isUserExist={isUserExist}
			/>
		</div>
	);
};

export default App;
