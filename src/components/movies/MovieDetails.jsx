import { useEffect, useState } from "react";
import { useApp } from "../../context/appContext";
import api from "../../core/api";

function MovieDetails() {
	const [movie, setMovie] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const { selectedId } = useApp();
	const {
		Title: title,
		Year: year,
		Poster: poster,
		Runtime: runtime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
	} = movie;

	useEffect(
		function () {
			async function getMovieDetails() {
				setIsLoading(true);
				api.movies
					.select(selectedId)
					.then(res => res.json())
					.then(data => {
						setMovie(data);
					})
					.finally(() => {
						setIsLoading(false);
					});
			}
			getMovieDetails();
		},
		[selectedId]
	);

	return (
		<div className="details">
			{isLoading ? (
				<p>Loading...</p>
			) : selectedId ? (
				<section>
					<img src={poster} alt={`Poster of ${title} movie`} />
					<div className="details-overview">
						<h2>{title}</h2>
						<p>
							{released} &bull; {runtime}
						</p>
						<p>{genre}</p>
						<p>
							<span>⭐️</span>
							{imdbRating} IMDb rating
						</p>
						<div>
							<p>
								<em>{plot}</em>
							</p>
							<p>Starring {actors}</p>
							<p>Directed by {director}</p>
						</div>
					</div>
				</section>
			) : null}
		</div>
	);
}
export default MovieDetails;
