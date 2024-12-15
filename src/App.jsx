import { useState } from 'react'
import './styles/app.scss'
import NavBar from './components/navBar'
import Hero from './components/hero'
import Card from './components/card'
import logo from './assets/logo-light.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
	<>
		<header>
			<NavBar />
		</header>
		<main>
			<Hero />
			<div className="action-call">
				<p>Check out our most popular courses</p>
			</div>
			<Card 
				imgUrl={'src/assets/icon-animation.svg'}
				title={'Animation'} 
				content={'Learn the latest animation techniques to create stunning motion design and captivate your audience.'}
			/>
			<Card 
				imgUrl={'src/assets/icon-design.svg'}
				title={'Design'} 
				content={'Create beautiful, usable interfaces to help shape the future of how the web looks.'}
			/>
			<Card 
				imgUrl={'src/assets/icon-photography.svg'}
				title={'Photography'} 
				content={'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.'}
			/>
			<Card 
				imgUrl={'src/assets/icon-crypto.svg'}
				title={'Crypto'} 
				content={'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.'}
			/>
			<Card 
				imgUrl={'src/assets/icon-business.svg'}
				title={'Business'} 
				content={'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.'}
			/>
		</main>

		<footer>
			<img src={logo} alt="logo" />
			<button>Get Started</button>
		</footer>
	</>
  )
}


export default App
