import React, { useEffect, useState } from "react"

function Hero() {
	const [width, setWidth] = useState(window.innerWidth)
	const [heroImgSrc, setHeroImgSrc] = useState('')

	useEffect(() => {
		if (width < 768) {
			setHeroImgSrc('src/assets/image-hero-mobile@2x.webp')
		} else if (width < 1440) {
			setHeroImgSrc('src/assets/image-hero-tablet.webp')
		} else {
			setHeroImgSrc('src/assets/image-hero-desktop.webp')
		}

		const handleResize = () => {
			setWidth(window.innerWidth)
			if (width < 768) {
				setHeroImgSrc('src/assets/image-hero-mobile@2x.webp')
			} else if (width < 1440) {
				setHeroImgSrc('src/assets/image-hero-tablet@2x.webp')
			} else {
				setHeroImgSrc('src/assets/image-hero-desktop@2x.webp')
			}
		}

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};

	}, [width]);

	return (
		<>
			<div className="hero">
				<div className="text-content">
					<h1>Maximize skill, minimize budget</h1>
					<p>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
					<button>Get Started</button>
				</div>
				<img src={heroImgSrc} alt="" />
			</div>
		</>
	)
}

export default Hero