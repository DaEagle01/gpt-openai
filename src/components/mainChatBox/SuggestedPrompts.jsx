
import { useEffect, useRef, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

const options = [
    {
        title: "Suggest fun activities",
        sub: "for a family visiting San Francisco",
    },
    {
        title: "Write a SQL query",
        sub: "that adds a status column to an orders table",
    },
    {
        title: "Recommend a dish",
        sub: "to bring to a potluck",
    },
    {
        title: "Plan a trip",
        sub: "to see the best of New York in 3 days",
    },
];

const SuggestedPrompts = ({ handleDispatchPrompt }) => {
    const [showTooltipIndex, setShowTooltipIndex] = useState();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [optionsToRender, setOptionsToRender] = useState(options);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (windowWidth <= 640) {
            setOptionsToRender(options.slice(0, 2));
        } else {
            setOptionsToRender(options);
        }
    }, [windowWidth]);

    return (
        <div className="px-2 grid grid-cols-12 gap-2 mb-4">
            {optionsToRender.map((option, i) => (
                <button
                    key={option.title}
                    onClick={() => handleDispatchPrompt(`${option.title} ${option.sub}`)}
                    className="group col-span-12 sm:col-span-6 w-full border py-3 px-4 rounded-xl hover:bg-[#f9f9f9] flex justify-between items-center"
                >
                    <div className="flex flex-col overflow-hidden text-left text-sm font-medium">
                        <p className="truncate">{option.title}</p>
                        <p className="truncate font-normal opacity-50">
                            {option.sub}
                        </p>
                    </div>
                    <div
                        onMouseEnter={() => setShowTooltipIndex(i)}
                        onMouseLeave={() => setShowTooltipIndex(null)}
                        className="hidden group-hover:flex p-1 bg-white rounded-full shadow relative"
                    >
                        <IoArrowUp className="w-3 h-3 stroke-1" />
                        {showTooltipIndex === i && (
                            <div className="absolute -top-12 -translate-x-[47%] -translate-y-[43%]">
                                <p className="h-fit rounded-md bg-black px-3 py-2 text-white text-nowrap">
                                    Click to send
                                </p>
                                <span className="absolute -bottom-1 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[15px] border-r-[15px] border-b-transparent border-r-black"></span>
                            </div>
                        )}
                    </div>
                </button>
            ))}
        </div>
    )
}

export default SuggestedPrompts