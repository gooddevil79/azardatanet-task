import { createContext, useContext, useReducer } from "react";

const initialState = {
	selectedMovieId: null,
};

const appContext = createContext();

const reducer = function (state, action) {
	switch (action.type) {
		case "app/selectMovie":
			return {
				...state,
				selectedMovie: action.payload,
			};
		default:
			throw new Error("WRONG ACTION TYPE");
	}
};

const AppContextProvider = function ({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const handleSelectMovie = function (movie) {
		dispatch({ type: "app/selectMovie", payload: movie });
	};

	return (
		<appContext.Provider
			value={{ selectedId: state.selectedMovie, handleSelectMovie }}
		>
			{children}
		</appContext.Provider>
	);
};

const useApp = function () {
	const context = useContext(appContext);
	if (context === undefined)
		throw new Error("Context was used outside the Provider");
	return context;
};
export { AppContextProvider, useApp };
