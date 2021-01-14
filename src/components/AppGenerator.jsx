// import Manager from "./Manager"
// import Displayer from "./Displayer"
import { LeftOutlined, BellOutlined, SettingOutlined, PoweroffOutlined } from '@ant-design/icons'
import React from 'react'
import "../css/app-generator.css"
import CandidatesCard from "./CandidatesCard"
import digbeu from './digbeu.jpg'
import EditProfile from "./EditProfile"
import EventView from "./EventView"
import ManagerContentHeader from "./ManagerContentHeader"
import RandomContent from "./RandomContent"
import AboutView from './AboutView'

class AppGenerator extends React.Component {

	constructor(props) {
		super(props)
		this.aboutList = [ 
			{
				id : 1,
				title:'Présentation',
				body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur iste dolorum deserunt. Quas in eius optio ipsam impedit fugit cumque molestiae rem iure reiciendis dolor beatae nam, magni quae."
			}, 
			{	
				id : 2,
				title:'Objectif et But',
				body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur iste dolorum deserunt. Quas in eius optio ipsam impedit fugit cumque molestiae rem iure reiciendis dolor beatae nam, magni quae."
			}, 
			{
				id:3,
				title:'La Fondatrice',
				body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur iste dolorum deserunt. Quas in eius optio ipsam impedit fugit cumque molestiae rem iure reiciendis dolor beatae nam, magni quae."
			}
		]		
		this.state = {
			editProfile : false,
			message : false,
			eventList : true,
			isActive : 'event',
			viewEvent : false,
			viewAbout : false,
			aboutForView : null,
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
		this.setState({ message : !this.state.message, eventList: !this.state.eventList, isActive : e.target.getAttribute("id")}, () => console.log(this.state.isActive, 'menu active swtiched!'))
		
	}

	handleViewAbout = (e) =>{
		const aboutId = e.target.getAttribute("id")
		if(this.state.idListActualActive !== null){
			document.getElementById(this.state.idListActualActive).classList.remove('list-view-active')
		}
		document.getElementById(aboutId).classList.add('list-view-active')
		const dataAboutForView = this.aboutList.filter(value => value.id == parseInt(aboutId))
		this.setState({viewAbout : true, aboutForView : dataAboutForView, idListActualActive : aboutId}, () => console.log("one about link clicked", this.state.idListActualActive))
	}

	handleViewEvent = (e) =>{
		const eventId = e.target.getAttribute("id")
		if(this.state.idListActualActive !== null){
			document.getElementById(this.state.idListActualActive).classList.remove('list-view-active')
		}
		document.getElementById(eventId).classList.add('list-view-active')
		const dataEventForView = this.state.events.filter(value => value.id == parseInt(eventId))
		this.setState({viewEvent : true, eventForView : dataEventForView, idListActualActive : eventId}, () => console.log("one event clicked", this.state.idListActualActive))
	}

	handleClose = (e) =>{
		e.preventDefault()
		this.setState({viewAbout : false, aboutForView : null, viewEvent: false, eventForView: null, idListActualActive: null}, () => console.log('event view closed'))
	}
	logout = (e) => {
		this.setState({viewAbout : false, aboutForView : null, viewEvent: false, eventForView: null, idListActualActive: null}, () => console.log('Log out'))
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
				<div className="app-header">
					<div className="menu">
						{/* <a href="#">Menu</a> */}
						<div className="profile-picture">
							<img src={digbeu} style={{width : "100%", height: "100%", borderRadius : "50%"}}/>
						</div>
					</div>
					<div className="nav-link">
					 <a href=""><BellOutlined/></a>
					 <a href=""><SettingOutlined/></a>
					 <a href=""><PoweroffOutlined /></a>
					</div>
				</div>
				<div className="menu-side">

				</div>
				<div className="displayer">

					{(this.state.viewEvent === true)?<EventView 
						content={this.state.eventForView} 
						handleClose={this.handleClose} />:
						(this.state.viewAbout === true)?this.state.aboutForView.map((value, index) => <AboutView 
							key={index}
							content={value} 
							handleClose={this.handleClose} />):
						(this.state.editProfile === false)?<CandidatesCard />:<EditProfile />}
					{/*OUAIS JE SE SAIS C'EST MOCHE CE QUE JE VIENS DE FAIRE, MAIS C'EST POUR LE TEST. JE COMPTE TOUT REORGANISER LE TOUT APRES*/}
				</div>
			</div>
		)
	}

}

export default AppGenerator
