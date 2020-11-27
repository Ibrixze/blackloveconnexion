import React from "react"
import digbeu from './digbeu.jpg'


class EditProfile extends React.Component{

    save = (e) =>{
        e.preventDefault()
    }
    render(){
        return (
            <div className="edit-container">
                <div className="edit-header">
                    <div className="profile-picture">
                        <img src={digbeu} style={{width : "100%", height: "100%", borderRadius : "50%"}}/>
                    </div>
                    <div className="user-info">
                        <span className="name">Digbeu Cravate</span><br/>
                        <span className="email">digbeu@cravate.fr</span>
                    </div>
                </div>
                <div className="edit-content">
                    <form action="#" method="post">
                        <div className="row">
                            <div className="from-groupment first">
                                <input className="form-input" name="nom" type="text" value="Digbeu" />
                            </div>
                            <div className="from-groupment second">
                                <input className="form-input" name="prenoms" type="text" value="Cravate"/>
                            </div>
                        </div>
                        <div className="column">
                            <div className="form-groupment">
                                <input type="text" className="form-input" name="email" value="digbeu@cravate.fr"/>
                            </div>
                            <div className="form-groupment">
                                <input type="password" className="form-input" name="password" value="jenesaispas"/>
                            </div>
                            <div className="form-groupment">
                                <button onClick={this.save} style={{backgroundColor: "darkmagenta", fontSize:"14px", fontWeight:"bold", color:"white", padding : "15px", borderRadius : "5px", margin: "10px 85%"}}>Enregister</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditProfile