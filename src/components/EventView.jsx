import React from 'react'
import { CloseOutlined } from "@ant-design/icons"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const EventView = function({content, handleClose}){
    const numberOfPictures = Math.random() * (5 - 2) + 2
    let slides = []
    for(let i =0; i < numberOfPictures; i++)
        slides.push("https://picsum.photos/id/" + parseInt(Math.random() * (300 - 1) + 1) + "/315/365")
    return(
        <>
            {/* <div style={{display:"flex", flexDirection:'column', alignItems:'center', padding: '10%'}}>
                <div style={{paddingLeft : "95%", paddingBottom:"5%", fontSize :"1.5rem", opacity:"0.3"}}><CloseOutlined onClick={handleClose}/></div>
                <div style={{width:"100%", height:'50vh', border:"3px dashed black", display:"flex", justifyContent:"center", alignItems:"center"}}>PHOTOS DE L'EVENEMENT</div>
                <h1>{content[0].title}</h1>
                <div>{content[0].body}</div>
            </div> */}
            <div className="card">
                
				    <div className="card-picture">
                        <AwesomeSlider>
                                {slides.map((element, index) =><img src={element} style={{borderTopLeftRadius: "3%", borderBottomLeftRadius: "10px", width:"100%", height:"100%"}}style={{borderTopLeftRadius: "3%", borderBottomLeftRadius: "10px", width:"100%", height:"100%"}}/>)}
                        </AwesomeSlider>
				        </div>
					{/* <img src={`https://picsum.photos/id/${(this.state.candidat !== null) ? parseInt(this.state.candidat[this.state.cpt].id) * parseInt(Math.random() * (500 - 1) + 1):''}/315/365`} style={{borderTopLeftRadius: "3%", borderBottomLeftRadius: "10px", width:"100%", height:"100%"}}/> */}
				<div className="card-info">
					<p>{"Event " + parseInt(Math.random()*(42 - 25) + 25)}</p>
					{/* <p>{(this.state.candidat !== null) ? this.state.candidat[(parseInt(Math.random() * (10 - 1) + 1))].address.street : ""} , {(this.state.candidat !== null) ? this.state.candidat[(parseInt(Math.random() * (10- 1) + 1))].address.city : ""}</p> */}
				</div>
			</div>
        </>
    )
}

export default EventView