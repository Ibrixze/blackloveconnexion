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
			cpt : 0
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

	render() {
		console.log(this.state.cpt)
		if(this.state.candidat !== null && this.state.cpt > (this.state.candidat.length)){
			this.setState({cpt : 0})
		}
		if(this.state.candidat !== null && this.state.cpt < 0){
			this.setState({cpt : (this.state.candidat.length - 1)})
		}
		return (
			<div className='app-container'>
				<div className="manager">
					<div className="manager-title">
						<div className="profile-picture"></div>
						<h4>Mon Profil</h4>
					</div><hr />		
					<div className="manager-content">
						<div>
							<h5 style={{borderBottom: '3px solid darkmagenta', padding: '5px'}}>Evenement(s)</h5>
							<h5>Message</h5>
						</div><hr/>
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
