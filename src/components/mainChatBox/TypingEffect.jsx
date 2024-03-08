import { forwardRef, useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const TypingEffect = forwardRef(({ text }, ref) => {
    const [content, setContent] = useState('');
    const contentRef = useRef(content);
    const speed = 1;

    useEffect(() => {
        contentRef.current = content;
    }, [content]);

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i <= text.length) {
                setContent((prevContent) => prevContent + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
        const scroller = setInterval(() => {
            if (contentRef.current.length !== text.length - 1) {
                ref.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
            } else {
                clearInterval(scroller);
            }
        }, 1000);
        return () => {
            clearInterval(timer)
            clearInterval(scroller)
        };
    }, [text]);

    return <p><ReactMarkdown>{content}</ReactMarkdown></p>;
});

export default TypingEffect;

TypingEffect.displayName = TypingEffect;

TypingEffect.propTypes = {
    text: PropTypes.string.isRequired,
    scrollToBottom: PropTypes
};