import React from 'react'
import { LeftOutlined, RightOutlined, HeartOutlined, HeartFilled,  CloseOutlined} from '@ant-design/icons'
import Like from '../like.png'

const interess = {
	// backgroundColor: "#5A82C3",
	// position:'relative', 
	// top: '50px',
	// left: '25%',
	// fontSize:"14px", 
	// fontWeight:"bold", 
	// color:"white", 
	// padding : "5%", 
	// borderRadius : "10px", 
	// margin: "10%",
	// textAlign : 'center'
}
class CandidatesCard extends React.Component {


	constructor(props){
		super(props)
		this.state = {
			candidat : null,
			randomPictures : null,
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


	render(){

		console.log(this.state.cpt)
		if(this.state.candidat !== null && this.state.cpt > (this.state.candidat.length)){
			this.setState({cpt : 0})
		}
		if(this.state.candidat !== null && this.state.cpt < 0){
			this.setState({cpt : (this.state.candidat.length - 1)})
		}
		
		return (
			<>
				{/* <div className="card-opac">
					{(this.state.cpt !== 0)?<LeftOutlined onClick={this.prev} className="nav-btn" style={{fontSize : "3rem", opacity: "0.2"}} />:""}
				</div> */}
				<div className="displayer-content">
					<div className="card">
						<div className="card-picture">
							<img src={`https://picsum.photos/id/${(this.state.candidat !== null) ? this.state.candidat[this.state.cpt].id:''}/315/365`} style={{borderTopLeftRadius: "3%", borderBottomLeftRadius: "10px", width:"100%", height:"100%"}}/>
						</div>
						<div className="card-info">
							<p>{(this.state.candidat !== null) ? this.state.candidat[this.state.cpt].name : ""} , {parseInt(Math.random()*(42 - 25) + 25)}</p>
							<p>{(this.state.candidat !== null) ? this.state.candidat[this.state.cpt].address.street : ""} , {(this.state.candidat !== null) ? this.state.candidat[this.state.cpt].address.city : ""}</p>
						</div>
					</div>
					<div className="rating">
						<a href="#"><HeartOutlined style={{fontSize : 40, color: "#e13f58"}}/></a>
						<a href="#"><CloseOutlined style={{fontSize : 40, color: "#37384e"}}/></a>
					</div>
				</div>
				{/* <div className="card-opac">
					{(this.state.candidat !==null && this.state.cpt !== this.state.candidat.length -1)?<RightOutlined onClick={this.next} style={{fontSize : "3rem", opacity: "0.2"}} />:""}
				</div> */}
			</>
		)
	}
}


export default CandidatesCard