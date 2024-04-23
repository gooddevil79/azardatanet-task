import { useEffect, useState } from "react";

import AutoCompeletInput from "./customs/AutoCompeletInput";

import { useDebounce } from "../hooks/useDebounce";
import api from "../core/api";
import { useApp } from "../context/appContext";

const Search = function () {
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(false);
	const { handleSelectMovie } = useApp();
	const searchQuery = useDebounce(query, 500);

	const handleSearch = function (e) {
		setQuery(e.target.value);
	};

	const fetchData = async function () {
		setLoading(true);
		try {
			const res = await api.movies.list(query);
			if (!res.status === 200) throw new Error("Error");
			const data = await res.json();
			setMovies(data.Search);
		} catch (err) {
			//handle error with better ui ux
			alert("Something Went wrong!");
		} finally {
			setLoading(false);
		}
	};

	const clearMovies = function (miliSec) {
		setTimeout(() => {
			setMovies([]);
		}, miliSec);
	};

	useEffect(() => {
		if (query.trim() === "") return;
		fetchData();
	}, [searchQuery]);

	return (
		<AutoCompeletInput
			onChange={handleSearch}
			onSelectSuggest={movie => {
				handleSelectMovie(movie.imdbID);
				setQuery("");
				clearMovies(200);
			}}
			placeholder="Search ..."
			inputValue={query}
			suggessts={movies}
			loading={loading}
			list="movie"
			onBlur={() => {
				clearMovies(200);
			}}
			onFocus={() => {
				if (query !== "") fetchData();
			}}
		/>
	);
};

export default Search;
