import { useApp } from "../../context/appContext";

const AutoCompeletInput = function ({
	suggessts = [],
	inputValue = "",
	onSelectSuggest,
	onChange,
	onBlur,
	list,
	placeholder = "",
	loading,
	onFocus,
}) {
	return (
		<div>
			<div className="input">
				<input
					className="search"
					placeholder={placeholder}
					list={list}
					value={inputValue}
					onChange={onChange}
					onBlur={onBlur}
					onFocus={onFocus}
				/>
				{loading && <p>Loading..</p>}
			</div>
			{!!suggessts?.length && (
				<ul className="list" id={list}>
					{suggessts?.map((item, i) => {
						return (
							<li
								className="option"
								onClick={() => {
									onSelectSuggest(item);
								}}
								value={item.imdbID}
								key={item.imdbID}
							>
								<img src={item.Poster} alt={`${item.Title} poster`} />
								<h3>{item.Title}</h3>
								<div>
									<p>
										<span>🗓</span>
										<span>{item.Year}</span>
									</p>
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default AutoCompeletInput;
