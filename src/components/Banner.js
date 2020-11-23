import React from "react"
import "../css/banner.css"


class Banner extends React.Component{
    

    render(){

        return(
            <div className="container">
                <div className="banner-container">
                    <a className="btn btn-banner" href="#modal" onClick={this.props.handleClick} modal-type="signin">OBTENIR UN COMPTE</a>
                </div>
            </div>
        )
    }
}


export default Banner