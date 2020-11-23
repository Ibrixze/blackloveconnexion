import React from "react"
import { CloseOutlined } from "@ant-design/icons"
import "../css/modal.css"
class IbrixzeLoginModal extends React.Component{
    
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        if(this.props.modalType == "login"){

            return(
                <div id="modal" className="modal" aria-hidden="true" role="dialog" aria-labelledby="modal-title" style={{display: "none"}}>
                    <div className="modal-wrapper js-modal-stop-prop" onClick={this.props.handleStopPropag}>
                        <div className="close-button">
                            <a className="js-close-modal" href="#" onClick={this.props.handleCloseModal}><CloseOutlined style={{fontSize : "1.5rem", color :"black"}}/></a>
                        </div>
                        <div className="modal-title">
                            <h3 id="modal-title">CONNECTEZ-VOUS</h3>

                        </div><hr />
                        <div className="modal-container">
                            <form method="post" action="#">
                                <div className="form-groupment">
                                    <input type="text" className="form-input" name="password" placeholder="Exemple : digbeu@cravate.fr"/> <br /><br />
                                </div>
                                <div className="form-groupment">
                                    <input type="password" className="form-input" name="password" placeholder="Mot de passe"/><br /><br />
                                </div>
                                <div className="btn-submit">
                                    <a href="#" className="btn-modal" name="" id="login" onClick={this.props.handleCloseModal}>CONNEXION</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            )
        }else{
            return(
                <div id="modal" className="modal" aria-hidden="true" role="dialog" aria-labelledby="modal-title" style={{display: "none"}}>
                    <div className="modal-wrapper js-modal-stop-prop" onClick={this.props.handleStopPropag}>
                        <div className="close-button">
                            <a className="js-close-modal" href="#" onClick={this.props.handleCloseModal}><CloseOutlined style={{fontSize : "1.5rem", color :"black"}}/></a>
                        </div>
                        <div className="modal-title">
                            <h3 id="modal-title">OBTENIR UN COMPTE</h3>
                        </div>
                        <div className="modal-container">
                            <form method="post" action="#">
                                <div className="form-groupment">
                                    <input className="form-input" type="text" name="password" placeholder="Exemple : digbeu@cravate.fr"/><br /><br />
                                </div>
                                <div className="btn-submit">
                                    <a href="#" className="btn-modal" name="" id="sign" onClick={this.props.handleCloseModal}>CONTINUER</a>
                                </div>    
                            </form>
                        </div>
                    </div>
                </div>
                
            )
        }
    }
}


export default IbrixzeLoginModal