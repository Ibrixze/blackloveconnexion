const ManagerContentHeader = function({handleActive}){
	return (
				
				<div style={{boxShadow: "5px 3px 3px 1px rgba(0, 0, 0, 0.1)"}}>
					<a href="#" style={{color : "black"}} onClick={handleActive}><h5 id="event" className="manager-content-header header-active">Evenement(s)</h5></a>
					<a href="#" style={{color : "black"}} onClick={handleActive}><h5 href="" id="message" className="manager-content-header">Message</h5></a>
				</div>
		)
} 


export default ManagerContentHeader