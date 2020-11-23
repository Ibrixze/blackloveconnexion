// import logo from './logo.svg';
import './App.css';
import './css/dash.css'
import React from "react";
// import Modifier from "react-modal";
import About from "./components/About";
import Banner from "./components/Banner";
import MyHeader from "./components/Header";
import IbrixzeLoginModal from "./components/IbrixzeLoginModal"
import AppGenerator from "./components/AppGenerator"
// import Manager from "./components/Manager"
class App extends React.Component{
  
  constructor(props){
    super(props)
    this.id = null   
    this.state = {
      modalType : null,
      showModal : false,
      id : null,
      logged : false
    }
  }
  

  modalButton = (e) => {
    this.id = e.target.getAttribute("href")
    console.log(this.modalType)
    let modal = document.querySelector(this.id)
    console.log(modal)
    modal.style.display = null
    modal.removeAttribute("aria-hidden")
    modal.setAttribute("aria-modal", true)
    this.setState({modalType: e.target.getAttribute('modal-type')})
    // modal.addEventListener("click", closeModal)
    // modal.querySelector(".js-modal-stop-prop").addEventListener("click", stopPropagation)
    // this.setState({id: e.target.getAttribute("href")}, () => console.log("ok"))
  }

  closeModal = (e) =>{
    let modal = document.querySelector(this.id)
    window.setTimeout(function(){
      modal.style.display = "none"
      modal = null
      this.id = null
    }, 500)
    modal.setAttribute("aria-hidden", true)
    modal.removeAttribute("aria-modal")
    if(e.target.getAttribute("id") === "login"){
      this.setState({modalType: null, logged: true})                  
    }
    this.setState({modalType: null}) 
    // modal.removeEventListener("click", closeModal)
    // modal.querySelector(".js-modal-stop-prop").removeEventListener("click", stopPropagation)
    // this.setState({id: null}, () => console.log("ferme"))
  }

  stopPropagation = (e) => {
    e.stopPropagation()
  }


  render(){
    if(!this.state.logged){
      return (
        <div className="">
          <div className="home">
            <div className="container-opacity"></div>
            <div className="home-container">
              <IbrixzeLoginModal 
                handleCloseModal={this.closeModal}
                handleStopPropag={this.stopPropagation}
                modalType={this.state.modalType}
                />
              <MyHeader handleClick={this.modalButton} />
              <Banner handleClick={this.modalButton} />
            </div>
          </div> 
          <About />
        </div>
        );
    }
    return(
          <div>
              <AppGenerator />
          </div>
    )
  
  }
}

export default App;
