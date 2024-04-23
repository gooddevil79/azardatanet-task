import Search from "../Search";
import NavBar from "../customs/Navbar";

function AppLayout({ children }) {
	return (
		<div className="appLayout">
			<NavBar>
				<Search placeholder="Search" />
			</NavBar>
			<main className="main">{children}</main>
		</div>
	);
}

export default AppLayout;
