import { useEffect, useState } from "react";
import ChatBoxNavbar from "./ChatBoxNavbar";
import WelcomeUser from "./WelcomeUser";
import ChatInputBox from "./ChatInputBox";
import Conversations from "./Conversations";

const MainChatBox = () => {
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true)
    const [conversations, setConversations] = useState([]);
    const [isNewMessage, setIsNewMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const oldConversations = JSON.parse(localStorage.getItem('conversations'))
        if (oldConversations) {
            setConversations(oldConversations);
            setShowWelcomeMessage(false);
        }
        setIsNewMessage(false);
    }, [])

    return (
        <div className='flex-grow bg-white'>
            <div className="flex flex-col justify-between relative h-screen">
                <div className="h-full">
                    <div className={`relative ${showWelcomeMessage ? "h-1/2" : ""}`}>
                        <ChatBoxNavbar />
                        {showWelcomeMessage && <WelcomeUser />}
                    </div>
                    <div className={`relative ${conversations.length > 0 && "h-[calc(100vh-140px)]"} sm:h-[calc(100vh-140px)] overflow-y-scroll`}>
                        {conversations?.length > 0 && <Conversations conversations={conversations} error={error} isLoading={isLoading} isNewMessage={isNewMessage} />}
                    </div>
                </div>
                <ChatInputBox setShowWelcomeMessage={setShowWelcomeMessage} conversations={conversations} setConversations={setConversations} error={error} setError={setError} isLoading={isLoading} setIsLoading={setIsLoading} setIsNewMessage={setIsNewMessage} />
            </div>
        </div>
    )
}

export default MainChatBox;
