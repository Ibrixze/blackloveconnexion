import React, { Component } from 'react'

class InputSearch extends Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="search">
				<input class="input-search" type="text" value="" name="" id="" placeholder="Rechercher, un utilisateur ou un event... "/>
			</div>
        )
    }
}

export default InputSearch