// import Manager from "./Manager"
// import Displayer from "./Displayer"
import React from 'react'
import CandidatesCard from "./CandidatesCard"
import RandomContent from "./RandomContent"
import ManagerContentHeader from "./ManagerContentHeader"
import EditProfile from "./EditProfile"
import { LeftOutlined } from '@ant-design/icons'
import "../css/app-generator.css"
import profil from './digbeu.jpg'


class AppGenerator extends React.Component {

	constructor(props) {
		super(props)
		
		this.state = {
			editProfile : false,
			message : false,
			eventList : true
		}
	}


	handleActive = (e) => {
		let target = document.getElementById(e.target.getAttribute("id"))
		let actualActive = document.querySelector('.header-active')
		actualActive.classList.remove('header-active')
		target.classList.add('header-active')
		this.setState({ message : !this.state.message, eventList: !this.state.eventList}, () => console.log('menu active swtiched!'))
		
	}

	toggleEditMode = () =>{
		this.setState({ editProfile : !this.state.editProfile}, () => console.log("switched"))
		/*
			L'IDEE ICI EST DE SWITCHER D'AFFICHAGE ENTRE LA MODIFICATION DU PROFIL ET LA STATUT BAR 
			TOUT EN VERIFIANT SI LE editMode EST A TRUE OU A FALSE. POUR CE FAIRE ON DOIT DANS UN 
			PREMIER TEMPS RENDRE LE CODE PLUS MODULAIRE. 
		*/
	}

	render() {
		console.log(this.state.editProfile)
		return (
			<div className='app-container'>
				<div className="manager">
					<div className="manager-title" onClick={this.toggleEditMode}>
						{(this.state.editProfile === true)?<LeftOutlined style={{fontSize : "1.5rem", marginRight: "20%"}} />:<div className="profile-picture"><profil /></div>}
						{(this.state.editProfile === true)?<h4>Mon Profil</h4>:<h4>Digbeu Cravate</h4>}
					</div><hr/>		
					<div className="manager-content">
						{(this.state.editProfile === false)?<ManagerContentHeader handleActive={this.handleActive} />:""}
						{(this.state.editProfile === false && this.state.eventList === true)?<RandomContent />:<><span>Modifier son profil</span><span>Se déconnecter</span></>}					
					</div>
				</div>
				<div className="displayer">
					{(this.state.editProfile === false)?<CandidatesCard />:<EditProfile />}
				</div>
			</div>
		)
	}

}

export default AppGenerator
