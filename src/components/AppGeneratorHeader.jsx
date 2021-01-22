import React, { Component } from 'react'
import logo from '../logo.png'
import InputSearch from './InputSearch'
import AppGeneratorHeaderNavLink from './AppGeneratorHeaderNavLink'
class AppGeneratorHeader extends Component{


    render(){
        return(
            <>
				<div className="menu">
					<img src={logo} alt="" srcset="" width="100" height="100"/>
				</div>
				<InputSearch >
                    {/*Resultats de la recherche*/}
                </InputSearch>
                <AppGeneratorHeaderNavLink />
			</>
        )
    }

}


export default AppGeneratorHeader