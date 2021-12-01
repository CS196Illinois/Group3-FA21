import React from 'react'
import "./Style.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className = "chats">

        <Chat 
                name = ""
                message = ""
                timestamp = ""
                profilePic = '' // link
            />  
       
        </div>
    )
}

export default Chats