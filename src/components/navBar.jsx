import logo from '../assets/logo-dark.svg'

function NavBar() {
	return (
		<>
			<nav>
				<img src={logo} alt="logo" />
				<button>Get Started</button>
			</nav>
		</>
	)
}

export default NavBar