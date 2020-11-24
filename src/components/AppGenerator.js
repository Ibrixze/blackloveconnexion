// import Manager from "./Manager"
// import Displayer from "./Displayer"
import React from 'react'
import CandidatesCard from "./CandidatesCard"
import RandomContent from "./RandomContent"
import ManagerContentHeader from "./ManagerContentHeader"
import "../css/app-generator.css"


class AppGenerator extends React.Component {

	constructor(props) {
		super(props)
		
		this.state = {
			editMode : false
		}
	}


	 

	toggleEditMode = () =>{
		this.setState({ editMode : !this.state.editMode}, () => console.log("switched"))
		/*
			L'IDEE ICI EST DE SWITCHER D'AFFICHAGE ENTRE LA MODIFICATION DU PROFIL ET LA STATUT BAR 
			TOUT EN VERIFIANT SI LE editMode EST A TRUE OU A FALSE. POUR CE FAIRE ON DOIT DANS UN 
			PREMIER TEMPS RENDRE LE CODE PLUS MODULAIRE. 
		*/
	}

	render() {
		console.log(this.state.editMode)
		return (
			<div className='app-container'>
				<div className="manager">
					<div className="manager-title" onClick={this.toggleEditMode}>
						<div className="profile-picture"></div>
						<h4>Mon Profil</h4>
					</div><hr />		
					<div className="manager-content">
						<div>
							<ManagerContentHeader />
						</div>
						<RandomContent />					
					</div>
				</div>
				<div className="displayer">
					<CandidatesCard />
				</div>
			</div>
		)
	}

}

export default AppGenerator
