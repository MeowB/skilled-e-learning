

function Card({imgUrl, title, content}) {
	return (
		<>
			<div className="card">
				<img src={imgUrl} alt="icon" />
				<h2>{title}</h2>
				<p>{content}</p>
				<a href="#">get Started</a>
			</div>
		</>
	)

}


export default Card