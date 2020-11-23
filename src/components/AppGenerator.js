// import Manager from "./Manager"
// import Displayer from "./Displayer"
import React from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import "../css/app-generator.css"


// const candidats = [
// 	{
// 		nom: "Brigitte",
// 		prenoms: "Macron",
// 		age: 24,
// 		image: "image de Brigitte la cougar"

// 	},
// 	{
// 		nom: "Marine",
// 		prenoms: "Lepen",
// 		age: 18,
// 		image: "image de Marine la raciste"
// 	}
// ]

class AppGenerator extends React.Component {

	constructor(props) {
		super(props)
		
		this.state = {
			candidat : null,
			cpt : 0,
			editMode : false
		}
	}


	 async componentDidMount(){
		let response = await fetch("https://jsonplaceholder.typicode.com/users")

		response.json().then(response => this.setState({candidat : response}, console.log("monted")))
		
			 
	 }

	next = () => {
		this.setState({cpt : this.state.cpt + 1})
		// console.log(this.state.cpt)
		// this.setState({ cpt : this.state.cpt + 1, candidat: candidats[this.state.cpt % (candidats.length - 1)] }, () => console.log("called", this.state.cpt))
	}

	prev = () => {
		this.setState({cpt : this.state.cpt - 1})
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
		console.log(this.state.cpt)
		if(this.state.candidat !== null && this.state.cpt > (this.state.candidat.length)){
			this.setState({cpt : 0})
		}
		if(this.state.candidat !== null && this.state.cpt < 0){
			this.setState({cpt : (this.state.candidat.length - 1)})
		}
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
							<h5 style={{borderBottom: '3px solid darkmagenta', padding: '5px'}}>Evenement(s)</h5>
							<h5>Message</h5>
						</div>
						<span><a href="#">Anniversaire de papa de ça</a></span>
						<span><a href="#">ça allait se casserr!!</a></span>
						<span><a href="#">Event bidon 3</a></span>
						<span><a href="#">Event bidon 4</a></span>
					</div>
				</div>
				<div className="displayer">
					<div className="card-opac">
						{(this.state.cpt !== 0)?<LeftOutlined onClick={this.prev} className="nav-btn" style={{fontSize : "3rem", opacity: "0.2"}} />:""}
					</div>
					<div className="displayer-content">
						<div className="card">
							<div className="card-picture">
								{(this.state.candidat !== null) ? this.state.candidat[this.state.cpt].id : ""}
							</div>
							<div className="card-info">
								<p>{(this.state.candidat !== null) ? this.state.candidat[this.state.cpt].name : ""} , {(this.state.candidat !== null) ? this.state.candidat[this.state.cpt].address.city : ""}</p>
							</div>
						</div>
					</div>
					<div className="card-opac">
						{(this.state.candidat !==null && this.state.cpt !== this.state.candidat.length -1)?<RightOutlined onClick={this.next} style={{fontSize : "3rem", opacity: "0.2"}} />:""}
					</div>
				</div>
			</div>
		)
	}

}

export default AppGenerator
