import React, { Component } from 'react'
import digbeu from './digbeu.jpg'
import {BellOutlined, PoweroffOutlined} from '@ant-design/icons'

class AppGeneratorHeaderNavLink extends Component{

    render(){
        return(
			<div className="nav-link">
                 <a href="">
                    <div className="profile-picture">
                        <img src={digbeu} style={{width : "100%", height: "100%", borderRadius : "50%"}}/>
                    </div> 
                 </a>
                <a href="" style={{color: "#e13f58"}}>Digbeu</a>
                <a href=""><BellOutlined style={{fontSize : 20, color: "#37384e"}}/></a>
                <a href=""><PoweroffOutlined style={{fontSize : 20, color: "#37384e"}} /></a>
            </div>
        )
    }
}

export default AppGeneratorHeaderNavLink