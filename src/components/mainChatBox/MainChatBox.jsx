import { useEffect, useState } from "react";
import SidebarHandler from "../sidebar/SidebarHandler";
import ChatBoxNavbar from "./ChatBoxNavbar";
import WelcomeUser from "./WelcomeUser";
import ChatInputBox from "./ChatInputBox";
import Conversations from "./Conversations";

const MainChatBox = () => {
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true)
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const oldConversations = JSON.parse(localStorage.getItem('conversations'))
        if (oldConversations) {
            setConversations(oldConversations);
            setShowWelcomeMessage(false);
        }
    }, [])

    return (
        <div className='flex-grow bg-white'>
            {/* <SidebarHandler /> */}
            <div className="flex flex-col justify-between relative h-screen">
                <div className="h-full">
                    <div className={`relative ${showWelcomeMessage ? "h-1/2" : ""}`}>
                        <ChatBoxNavbar />
                        {showWelcomeMessage && <WelcomeUser />}
                    </div>
                    <div className={`relative h-[calc(100vh-140px)] overflow-y-scroll`}>
                        {conversations?.length > 0 && <Conversations conversations={conversations} />}
                    </div>
                </div>
                <ChatInputBox setShowWelcomeMessage={setShowWelcomeMessage} conversations={conversations} setConversations={setConversations} />
            </div>
        </div>
    )
}

export default MainChatBox;
