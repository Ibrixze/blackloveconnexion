// import Manager from "./Manager"
// import Displayer from "./Displayer"
import { LeftOutlined } from '@ant-design/icons'
import React from 'react'
import "../css/app-generator.css"
import CandidatesCard from "./CandidatesCard"
import digbeu from './digbeu.jpg'
import EditProfile from "./EditProfile"
import EventView from "./EventView"
import ManagerContentHeader from "./ManagerContentHeader"
import RandomContent from "./RandomContent"


class AppGenerator extends React.Component {

	constructor(props) {
		super(props)
		
		this.state = {
			editProfile : false,
			message : false,
			eventList : true,
			viewEvent : false,
			eventForView : null,
			idListActualActive : null,
			events : [] 
		}
	}

	async componentDidMount(){
		let reponse = await fetch("https://jsonplaceholder.typicode.com/posts")
		let datas = []
		
		reponse.json().then(response => {
			response.map((value, index) => {
				if(value.title.length < 50 && index < 5)
					datas.push(value)
				return
			})
			this.setState({events : datas}, ()=> console.log(datas, 'Posts loaded'))
		})
	}

	handleActive = (e) => {
		let target = document.getElementById(e.target.getAttribute("id"))
		let actualActive = document.querySelector('.header-active')
		actualActive.classList.remove('header-active')
		target.classList.add('header-active')
		this.setState({ message : !this.state.message, eventList: !this.state.eventList}, () => console.log('menu active swtiched!'))
		
	}

	handleViewEvent = (e) =>{
		const eventId = e.target.getAttribute("id")
		if(this.state.idListActualActive !== null){
			console.log("mercon")
			document.getElementById(this.state.idListActualActive).classList.remove('list-view-active')
		}
		document.getElementById(eventId).classList.add('list-view-active')
		const dataEventForView = this.state.events.filter(value => value.id == parseInt(eventId))
		this.setState({viewEvent : true, eventForView : dataEventForView, idListActualActive : eventId}, () => console.log("one event clicked", this.state.idListActualActive))
	}
	handleClose = (e) =>{
		e.preventDefault()
		this.setState({viewEvent: false, eventForView: null, idListActualActive: null}, () => console.log('event view closed'))
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
						{(this.state.editProfile === true)?<LeftOutlined style={{fontSize : "1.5rem", marginRight: "20%", color: 'darkmagenta'}} />:<div className="profile-picture"><img src={digbeu} style={{width : "100%", height: "100%", borderRadius : "50%"}}/></div>}
						{(this.state.editProfile === true)?<h4 style={{color: "darkmagenta"}}>Mon Profil</h4>:<h4 style={{color: "darkmagenta"}}>Digbeu Cravate</h4>}
					</div><hr/>		
					<div className="manager-content">
						{(this.state.editProfile === false)?<ManagerContentHeader handleActive={this.handleActive} />:""}
						{(this.state.editProfile === false && this.state.eventList === true && this.state.events!== null)?this.state.events.map((value, index)=><RandomContent handleIsActive={this.state.idListActualActive} handleViewEvent={this.handleViewEvent} key={index} content={value} />):<><span style={{borderRight : "5px solid darkmagenta"}}>Modifier son profil</span><span>Se déconnecter</span></>}					
					</div>
				</div>
				<div className="displayer">
					
					{(this.state.viewEvent === true)?<EventView content={this.state.eventForView} handleClose={this.handleClose} />:(this.state.editProfile === false)?<CandidatesCard />:<EditProfile />}
					{/*OUAIS JE SE SAIS C'EST MOCHE CE QUE JE VIENS DE FAIRE, MAIS C'EST POUR LE TEST. JE COMPTE TOUT REORGANISER LE TOUT APRES*/}
				</div>
			</div>
		)
	}

}

export default AppGenerator
