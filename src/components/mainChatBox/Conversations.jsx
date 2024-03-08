import { SiOpenai } from "react-icons/si";
import dummy from "../../assets/dummy.png";
import ReactMarkdown from 'react-markdown';
import { forwardRef, useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import TypingEffect from "./TypingEffect";

const Conversations = ({ conversations, error, isLoading, isNewMessage }) => {
    const messageRef = useRef(null);
    const isUser = (data) => data.role === 'user';
    return (
        <div className="max-w-[48rem] mx-auto overflow-y-auto py-2">
            <div className="w-full space-y-6 mb-6 px-5">
                {conversations?.map((item, i) => (
                    <div key={i} className={`w-full flex ${isUser(item) ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex gap-3 max-w-[95%] sm:max-w-[85%] ${isUser(item) ? 'justify-end' : 'justify-start'}`}>
                            <div className={`${isUser(item) ? 'order-2' : 'order-1 bg-[#19c37d]'} h-6 w-6 flex-shrink-0 flex justify-center items-center rounded-full`}>
                                {
                                    isUser(item) ? (
                                        <img src={dummy} alt="dummy icon" className="w-full h-full" />
                                    ) : (
                                        <SiOpenai className="h-2/3 w-2/3 flex-shrink-0 text-white" />
                                    )
                                }
                            </div>
                            <div className={`order-1 rounded-lg flex flex-col justify-end ${isUser(item) ? 'text-right' : 'text-left'}`}>
                                <p className="text-gray-900 text-base font-semibold">
                                    {isUser(item) ? "You" : "ChatGPT"}
                                </p>
                                <p className="text-gray-900 text-sm leading-6">
                                    {isUser(item) ? <>{item.content}</>
                                        :
                                        (i === conversations.length - 1 && isNewMessage) ?
                                            <TypingEffect ref={messageRef} text={item.content} />
                                            :
                                            <ReactMarkdown>{item.content}</ReactMarkdown>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messageRef}></div>
            </div>
        </div>
    )
}

export default Conversations

Conversations.propTypes = {
    conversations: PropTypes.arrayOf(
        PropTypes.shape({
            role: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
}; 