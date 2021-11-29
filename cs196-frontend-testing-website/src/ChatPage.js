import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core'
import "./Style.css"

function ChatPage() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: '',
            profilePic: '',
            message: " "
        },
        {
            name: '',
            profilePic: '',
            message: " "
        },       
    ])

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return (
        <div className = "chatPage">
            <p className="chatPage__timestamp"> Date of Match </p>

            {messages.map((message) => (
                message.name ? (
                <div className = "chatPage__message">
                    <Avatar className = "chatPage__avatar"
                    alt = {message.name}
                    src = {message.image} />
                    <p className="chatPage__paragraph"> {message.message} </p>
                </div>
                ) : (
                    <div className = "chatPage__message">
                        <p className = "chatPage__paragraphUser"> {message.message} </p>
                    </div>
                )
            )
            )}
                <form className = "chatPage__input"> 
                    <input value = {input} onChange = {e => setInput(e.target.value)} 
                           className = "chatPage__inputField" 
                           placeholder = "Type a Message...." type="text"/>

                        <Button onClick = {handleSend} variant = "contained" color = "secondary" type = "submit"> 
                            SEND 
                        </Button>
                </form>
        </div>
    )
}

export default ChatPage