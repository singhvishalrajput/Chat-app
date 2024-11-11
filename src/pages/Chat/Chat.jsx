import React from 'react'
import "./Chat.css"
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import ChatBox from '../../components/ChatBox/ChatBox'
import RighSideBar from '../../components/RightSideBar/RighSideBar'


const Chat = () => {
  return (
    <div className='chat'>
        <div className="chat-container">
            <LeftSideBar/>
            <ChatBox/>
            <RighSideBar/>
        </div>

    </div>
  )
}


export default Chat
