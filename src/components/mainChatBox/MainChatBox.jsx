import { useState } from "react";
import SidebarHandler from "../sidebar/SidebarHandler";
import ChatBoxNavbar from "./ChatBoxNavbar";
import Conversation from "./Conversation";
import WelcomeUser from "./WelcomeUser";

const MainChatBox = () => {
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true)
    return (
        <div className='flex-grow relative bg-white'>
            <SidebarHandler />
            <div className="flex flex-col justify-between relative h-full">
                <div className="overflow-hidden relative h-1/2">
                    <ChatBoxNavbar />
                    {showWelcomeMessage && <WelcomeUser />}
                </div>
                <div className="w-full relative h-1/2">
                    <Conversation setShowWelcomeMessage={setShowWelcomeMessage} />
                </div>
            </div>
        </div>
    )
}

export default MainChatBox;
