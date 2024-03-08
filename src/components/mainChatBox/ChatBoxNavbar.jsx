import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const ChatBoxNavbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className="relative z-50 left-0 right-0 bg-white border-b md:border-none">
            <div className="font-semibold px-3 md:px-0 md:p-2 flex justify-between items-center">
                <button className="md:hidden" onClick={() => setShowSidebar(true)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z" fill="currentColor"></path></svg>
                </button>
                <button className="flex items-center gap-1 font-medium text-lg py-2 px-3 rounded-xl focus:bg-[#f9f9f9] hover:bg-[#f9f9f9]">
                    <p className="text-nowrap">
                        ChatGPT <span className="text-[#676767]">3.5</span>
                    </p>
                    <div>
                        <MdOutlineKeyboardArrowDown className="text-gray-500" />
                    </div>
                </button>
                <button className="md:hidden">
                    <FiEdit className="h-[20px] w-[20px] font-bold stroke-black" />
                </button>
            </div>
            <div
                className={`fixed z-[5155] top-0 h-screen w-screen md:hidden bg-black/50 transition-all duration-500 ${showSidebar ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden`}
                onClick={() => setShowSidebar(false)}
            >
                <div
                    className={`flex w-max transform transition-transform duration-500 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Sidebar />
                    <div
                        className="w-10 h-10 flex justify-center items-center pt-[0.875rem] ml-2 cursor-pointer"
                        onClick={() => setShowSidebar(false)}
                    >
                        <MdClose className="text-white w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBoxNavbar