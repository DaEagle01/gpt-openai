import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import SuggestedPrompts from "./SuggestedPrompts";

const ChatInputBox = (props) => {
    const { setShowWelcomeMessage, conversations, setConversations } = props;
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
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

    const handleDispatchPrompt = async (message) => {
        setConversations((prev) => {
            return [...prev, { role: 'user', content: message }]
        })
        setShowWelcomeMessage(false);
        setPrompt('')
        setIsLoading(true);
        try {
            let url = "https://api.openai.com/v1/chat/completions"
            let token = `Bearer ${import.meta.env.VITE_OPEN_AI_SECRET_KEY}`
            let model = 'gpt-3.5-turbo'

            let messagesToSend = [
                ...conversations,
                {
                    role: 'user',
                    content: message
                }
            ]

            let res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: model,
                    messages: messagesToSend
                })
            })
            let response = await res.json()
            console.log(response)
            if (response) {
                let newAllMessages = [...messagesToSend, response.choices[0].message]
                localStorage.setItem('conversations', JSON.stringify(newAllMessages))
                setConversations(newAllMessages)
            }
        } catch (error) {
            console.error(error);
            setError(error.message)
        }
        setIsLoading(false);
    }

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

    // console.log({ isLoading, error, conversations })

    return (
        <div className="absolute bottom-0 left-0 right-0 max-w-[48rem] mx-auto h-max bg-white">

            {!conversations?.length && <SuggestedPrompts handleDispatchPrompt={handleDispatchPrompt} />}

            {/* {conversations?.length > 0 && <Conversations conversations={conversations} />} */}

            <div className="relative">
                <form onSubmit={handleSubmit} className="flex w-full items-center">
                    <textarea
                        ref={textareaRef}
                        name="prompt"
                        value={prompt}
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        type="text"
                        className="min-h-[52px] max-h-[25vh] rounded-2xl w-full overflow-y-hidden py-[0.8rem] pl-4 pr-12 border border-gray-300 focus:outline-none  focus:border focus:border-gray-400 resize-none"
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

ChatInputBox.displayName = 'ChatInputBox'
export default ChatInputBox;
