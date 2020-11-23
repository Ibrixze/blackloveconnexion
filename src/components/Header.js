import React from "react"
import "../css/header.css"



class Header extends React.Component{
    

    // openModal = () => {
        
    // }

    // afterOpenModal = () =>{
    //     subtitle.style.color = "#f00"
    // }

    // closeModal = () => {
    //     this.setState({showModal: false})
    // }
    render(){
        return(
    
            <header className='header'>
                <div className="logo">
                    <h3>Black Love</h3>
                </div>
                <div className="nav-bar">               
                    <nav className="lien">
                        <a href="/">ACCUEIL</a> 
                        <a href="/">PRESENTATION</a>
                        <a href="/">OBJECTIF</a>
                        <a href="/">LA FONDATRICE</a>
                    </nav>
                    <div className="bouton-menu">
                        <button id="connexion" className="btn" onClick={this.props.handleClick} href="#modal" modal-type="login">CONNEXION</button>
                    </div>
                </div>
                   
            </header>
        )    
    }
}
// const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)'
//     }
//   }

export default Header