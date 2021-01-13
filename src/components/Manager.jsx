const managerStyle = {
    borderRight: "1px solid black",
    margin:"0px",
    width: "25%",
    height: "100vh"
}
                        
function Manager(){
    return(
        <div style={managerStyle}>
            <h3>Profil</h3><hr />
            <div className="manager-container">
                Un contenu bidon
            </div>
        </div>
    )
}

export default Manager