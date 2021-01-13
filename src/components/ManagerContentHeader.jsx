const ManagerContentHeader = function({handleActive, handleIsActive}){
	return (
				
				<div style={{boxShadow: "5px 3px 3px 1px rgba(0, 0, 0, 0.1)"}}>
					<a href="#" style={{color : "black"}} onClick={handleActive}><h5 id="event" className={`manager-content-header ${(handleIsActive ==="event")?"header-active":""}`}>Evenement(s)</h5></a>
					<a href="#" style={{color : "black"}} onClick={handleActive}><h5 href="" id="message" className={`manager-content-header ${(handleIsActive ==="message")?"header-active":""}`}>Message</h5></a>
					<a href="#" style={{color : "black"}} onClick={handleActive}><h5 href="" id="about" className={`manager-content-header ${(handleIsActive ==="about")?"header-active":""}`}>A propos</h5></a>
				</div>
		)
} 


export default ManagerContentHeader