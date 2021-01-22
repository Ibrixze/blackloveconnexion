import React, {Component} from 'react'


class MenuAside extends Component{
    
    constructor(props){
        super(props)
    }

    render(){
    
        return (
            <div className="menu-side">
                <div><a id="decouvrir" className="menu-side-active" onClick={this.props.select} href="#">DECOUVRIR</a></div>
                <div><a id="events"  onClick={this.props.select} href="#">EVENTS</a></div>
                <div><a id="mes-photos"  onClick={this.props.select} href="#">MES PHOTOS</a></div>
            </div>
        )
    }
}


export default MenuAside