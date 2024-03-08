import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ChatBoxNavbar = () => {
    return (
        <div className="relative z-50 left-0 right-0 bg-white">
            <div className="font-semibold p-2 flex justify-between items-center">
                <button className="flex items-center gap-1 font-medium text-lg py-2 px-3 rounded-xl focus:bg-[#f9f9f9] hover:bg-[#f9f9f9]">
                    <p className="text-nowrap">
                        ChatGPT <span className="text-[#676767]">3.5</span>
                    </p>
                    <div>
                        <MdOutlineKeyboardArrowDown className="text-gray-500" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default ChatBoxNavbar