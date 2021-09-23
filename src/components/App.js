import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GithubProfile from "./GithubProfile";
import Header from "./Header";
import RepoInfo from "./RepoInfo";

const App = () => {
	const [user, setUser] = useState("");
	const [userData, setUserData] = useState({});
	const [userRepos, setUserRepos] = useState([]);
	const [userCreated, setUserCreated] = useState({});
	const [isUserExist, setIsUserExist] = useState("empty");
	const [query, setQuery] = useState(user);
	const [repoName, setRepoName] = useState("");
	const [isToggled, setIsToggled] = useState(false);

	// triggers when variable query changes
	useEffect(() => {
		const api = `https://api.github.com/users/${query}`;
		const apiRepos = `https://api.github.com/users/${query}/repos?sort=created`;

		const getUserData = async () => {
			const response = await fetch(api);

			if (response.ok) {
				setIsUserExist("true");
				const data = await response.json();
				setUserData(data);

				let date = new Date(data.created_at);
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

		// only run if query has truthy value
		if (query) {
			getUserData();
		}
	}, [query]);

	const updateSearch = (e) => {
		setUser(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		setQuery(user);
		setIsUserExist("true");
	};

	const handleRepo = (repo) => {
		setRepoName(repo);
	};

	const goToHome = () => {
		setUser("");
		setQuery(user);
		setIsUserExist("empty");
	};

	const handleIsToggled = () => {
		setIsToggled(!isToggled);
	};

	return (
		<div className={isToggled ? "light app" : "app"}>
			<Router>
				<Header
					goToHome={goToHome}
					isToggled={isToggled}
					handleIsToggled={handleIsToggled}
				/>
				<Switch>
					<Route exact path="/">
						<GithubProfile
							data={userData}
							repos={userRepos}
							userCreation={userCreated}
							query={query}
							user={user}
							updateSearch={updateSearch}
							handleSearch={handleSearch}
							isUserExist={isUserExist}
							handleRepo={handleRepo}
						/>
					</Route>
					<Route path="/:name/:repo">
						<RepoInfo repoName={repoName} user={query} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
