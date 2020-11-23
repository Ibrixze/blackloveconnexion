import React from "react"
import "../css/modal.css"

class IbrixzeSigninModal extends React.Component{
    
    constructor(props){
        super(props)

    }
    
    render(){

        return(
            <div id="modal" className="modal" aria-hidden="true" role="dialog" aria-labelledby="modal-title" style={{display: "none"}}>
                <div className="modal-wrapper js-modal-stop-prop" onClick={this.props.handleStopPropag}>
                    <button className="js-close-modal" onClick={this.props.handleCloseModal}>Fermer la boite de dialogue</button>
                    <h4 id="modal-title">OBTENIR UN COMPTE</h4>
                    <div>
                        <form action="#" method="post">
                            <input type="text" placeholder="Entrez votre email"/>
                            <button>CONTINUER</button>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}


export default IbrixzeSigninModal