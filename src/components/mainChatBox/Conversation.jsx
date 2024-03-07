import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import SuggestedPrompts from "./SuggestedPrompts";

const Conversation = ({ setShowWelcomeMessage }) => {
    const [prompt, setPrompt] = useState("");
    const [conversations, setConversations] = useState([]);
    const disabled = !prompt.length;
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [prompt]);

    const handleInput = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
        setPrompt(e.target.value)
    };

    const handleDispatchPrompt = (message) => {
        console.log("in ", message);
        setConversations((prev) => {
            return [...prev, { isUser: true, message: message }]
        })
        setShowWelcomeMessage(false);
    }
    console.log(conversations)
    const handleSubmit = (e) => {
        e.preventDefault();
        handleDispatchPrompt(prompt)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleDispatchPrompt(prompt);
        }
    };

    return (
        <div className="absolute bottom-0 left-0 right-0 max-w-[48rem] mx-auto h-max">
            {!conversations.length && <SuggestedPrompts handleDispatchPrompt={handleDispatchPrompt} />}

            <div className="relative">
                <form onSubmit={handleSubmit} className="flex w-full items-center">
                    <textarea
                        ref={textareaRef}
                        name="prompt"
                        value={prompt}
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        type="text"
                        className="min-h-[52px] max-h-[25vh] rounded-2xl w-full overflow-y-hidden py-[0.8rem] pl-4 pr-12 border border-gray-300 focus:outline-none  focus:border-2 focus:border-gray-400 resize-none"
                        rows="1"
                        placeholder="Message ChatGPT…"
                    />
                    <button type="submit" disabled={disabled} className="absolute bg-black disabled:opacity-10 p-[7px] rounded-lg right-3 bottom-3 h-max w-max">
                        <FaArrowUp className="text-white w-4 h-4" />
                    </button>
                </form>
            </div>
            <p className="relative px-2 py-2 text-center text-xs text-[#676767] md:px-[60px]">
                ChatGPT can make mistakes. Consider checking important information.
            </p>
        </div>
    );
};

export default Conversation;
