const RandomContent = function({content, handleView, handleIsActive}){
	
	// let $elements = contents.forEach((content, index) => {
	// 	<span><a href="#">{content.title}</a></span>
	// })
	// let $elements = contents.map((value, index) => <span><a href="#">{value.title}</a></span>)
	// contents.forEach((content) => console.log(content.title))
	console.log(handleIsActive)
	return(
		<>
			<span className={`list-view ${(handleIsActive!==null && handleIsActive == content.id)?'list-view-active':''}`} id={content.id} onClick={handleView}>{content.title}</span>
		</>
	)
}

export default RandomContent