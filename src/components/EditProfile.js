import React from "react"



class EditProfile extends React.Component{


    render(){
        return (
            <div className="edit-container">
                <div className="edit-header">
                    <div className="profile-picture"></div>
                    <div className="user-info">
                        <span className="name">Digbeu Cravate</span><br/>
                        <span className="email">digbeu@cravate.fr</span>
                    </div>
                </div>
                <div className="edit-content">
                    <form action="#" method="post">
                        <div className="row">
                            <div className="from-groupment first">
                                <input className="form-input" name="nom" type="text" value="Digbeu" />
                            </div>
                            <div className="from-groupment second">
                                <input className="form-input" name="prenoms" type="text" value="Cravate"/>
                            </div>
                        </div>
                        <div className="column">
                            <div className="form-groupment">
                                <input type="text" className="form-input" name="email" value="digbeu@cravat.fr"/>
                            </div>
                            <div className="form-groupment">
                                <input type="password" className="form-input" name="password" value="jenesaispas"/>
                            </div>
                            <div className="form-groupment">
                                <a class="btn" href="#">Enregister</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditProfile