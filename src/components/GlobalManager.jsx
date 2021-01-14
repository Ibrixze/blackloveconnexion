import React from 'react'
import { LeftOutlined } from '@ant-design/icons'
import "../css/app-generator.css"
import digbeu from './digbeu.jpg'
import ManagerContentHeader from "./ManagerContentHeader"
import RandomContent from "./RandomContent"




class GlobalManager extends React.Component{


    constructor(props){
        super(props)
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
    }

    
    render(){
        return (
                <div className="manager">
					<div className="manager-title" onClick={this.toggleEditMode}>
						{(this.state.editProfile === true)?<LeftOutlined style={{fontSize : "1.5rem", marginRight: "20%", color: 'darkmagenta'}} />:<div className="profile-picture"><img src={digbeu} style={{width : "100%", height: "100%", borderRadius : "50%"}}/></div>}
						{(this.state.editProfile === true)?<h4 style={{color: "darkmagenta"}}>Mon Profil</h4>:<h4 style={{color: "darkmagenta"}}>Digbeu Cravate</h4>}
					</div><hr style ={{color:"rgba(0, 0, 0, 0.1)"}}/>		
					<div className="manager-content">
						{(this.state.editProfile === false)?<ManagerContentHeader handleActive={this.handleActive} handleIsActive={this.state.isActive}/>:""}
						{
						(this.state.editProfile === false && this.state.isActive === 'event' && this.state.events!== null)?this.state.events.map((value, index)=>
							<RandomContent 
								handleIsActive={this.state.idListActualActive}
								handleView={this.handleViewEvent} 
								key={index} content={value} />
						):""}
						{(this.state.editProfile === false && this.state.isActive === 'message')?"Message content":""}
						{(this.state.editProfile === false && this.state.isActive === 'about')?this.aboutList.map((title, index) => 
							<RandomContent  
								handleIsActive={this.setState.idListActualActive}
								handleView={this.handleViewAbout}
								key={index} content={title} />
							):""}
						{(this.state.editProfile)?
							<>
								<span style={{borderTop:"1px solid rgba(0, 0, 0, 0.1)", marginTop: '20%', borderRight : "5px solid darkmagenta"}}>Modifier son profil</span>
								<span>Contrat de confidentialité</span>
								<span onClick={()=>{
										this.setState({viewAbout : false, aboutForView : null, viewEvent: false, eventForView: null, idListActualActive: null}, this.props.handleLogout)
									}
								}>Se déconnecter</span>
							</>:""}
						{/* {(this.state.editProfile === false && this.state.eventList === true && this.state.events!== null)?this.state.events.map((value, index)=><RandomContent handleIsActive={this.state.idListActualActive} handleViewEvent={this.handleViewEvent} key={index} content={value} />):<><span style={{borderRight : "5px solid darkmagenta"}}>Modifier son profil</span><span>Se déconnecter</span></>} */}
					</div>
				</div>
        )
    }
}


export default GlobalManager