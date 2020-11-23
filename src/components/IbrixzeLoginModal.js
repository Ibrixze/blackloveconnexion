import React from "react"
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
                        <button className="js-close-modal" onClick={this.props.handleCloseModal}>Fermer la boite de dialogue</button>
                        <h4 id="modal-title">CONNECTEZ-VOUS</h4>
                        <div>
                            <form method="post" action="#">
                                <input type="text" name="password" placeholder="email"/>
                                <input type="password" name="password" placeholder="Mot de passe"/>
                                <input type="submit" name="" id="login" value="SE CONNECTER" onClick={this.props.handleCloseModal}/>
                            </form>
                        </div>
                    </div>
                </div>
                
            )
        }else{
            return(
                <div id="modal" className="modal" aria-hidden="true" role="dialog" aria-labelledby="modal-title" style={{display: "none"}}>
                    <div className="modal-wrapper js-modal-stop-prop" onClick={this.props.handleStopPropag}>
                        <button className="js-close-modal" onClick={this.props.handleCloseModal}>Fermer la boite de dialogue</button>
                        <h4 id="modal-title">OBTENEZ UN COMPTE</h4>
                        <div>
                            <form method="post" action="#">
                                <input type="text" name="password" placeholder="email"/>
                                <button>CONTINUER</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            )
        }
    }
}


export default IbrixzeLoginModal