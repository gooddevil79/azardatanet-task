import { useEffect } from "react";

import AppLayout from "./components/layout/AppLayout";
import Main from "./components/customs/Main";
import MovieDetails from "./components/movies/MovieDetails";

function App() {
	return (
		<AppLayout>
			<Main>
				<MovieDetails />
			</Main>
		</AppLayout>
	);
}

export default App;
