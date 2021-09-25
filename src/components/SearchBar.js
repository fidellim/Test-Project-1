import React from "react";

const SearchBar = ({ handleSearch, updateSearch, user }) => {
	return (
		<main>
			<div className="inputUserContainer">
				<form>
					<i className="fas fa-search"></i>
					<input
						data-testid="inputUser"
						type="text"
						className="inputUser"
						placeholder="Github username"
						value={user}
						onChange={updateSearch}
					/>

					<button className="search" onClick={handleSearch}>
						Search
					</button>
				</form>
			</div>
		</main>
	);
};

export default SearchBar;
