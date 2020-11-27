import { CloseOutlined } from "@ant-design/icons"

const EventView = function({content, handleClose}){
    return(
        <>
            <div style={{display:"flex", flexDirection:'column', alignItems:'center', padding: '10%'}}>
                <div style={{paddingLeft : "95%", paddingBottom:"5%", fontSize :"1.5rem", opacity:"0.3"}}><CloseOutlined onClick={handleClose}/></div>
                <div style={{width:"100%", height:'50vh', border:"3px dashed black", display:"flex", justifyContent:"center", alignItems:"center"}}>PHOTOS DE L'EVENEMENT</div>
                <h1>{content[0].title}</h1>
                <div>{content[0].body}</div>
            </div>
        </>
    )
}

export default EventView