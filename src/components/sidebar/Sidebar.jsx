import { SiOpenai } from "react-icons/si";
import { FiEdit } from "react-icons/fi";
import dummy from "../../assets/dummy.png";

const Sidebar = () => {
    return (
        <sidebar className="w-[16.25rem] h-screen bg-[#f9f9f9] px-3 py-[0.875rem]" aria-label="Chat history">
            <div className="relative flex flex-col justify-between flex-1 h-full transition-opacity duration-500 pr-2 font-medium cursor-pointer">
                <div>
                    <div className="px-2 w-full h-10 flex justify-between items-center gap-2 rounded-lg hover:bg-[#ececec] sticky left-0 right-0 top-0 z-20 ">
                        <div className="h-7 w-7 flex-shrink-0 bg-white flex justify-center items-center rounded-full border">
                            <SiOpenai className="h-2/3 w-2/3 flex-shrink-0" />
                        </div>
                        <p className="text-black flex-grow truncate text-sm">
                            New chat
                        </p>
                        <button className="">
                            <FiEdit className="h-[16px] w-[16px] font-bold stroke-black" />
                        </button>
                    </div>
                </div>
                <div className="pt-2 flex flex-col text-sm sticky left-0 right-0 bottom-0-0 z-20">
                    <div className="p-[0.625rem] px-2 w-full flex items-center gap-2 rounded-lg hover:bg-[#ececec]">
                        <div className="h-7 w-7 flex items-center justify-center rounded-full border">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-sm shrink-0">
                                <path d="M8.78158 8.60266L9.8188 5.49098C10.037 4.83634 10.963 4.83634 11.1812 5.49098L12.2184 8.60266C12.7187 10.1035 13.8965 11.2813 15.3973 11.7816L18.509 12.8188C19.1637 13.037 19.1637 13.963 18.509 14.1812L15.3973 15.2184C13.8965 15.7187 12.7187 16.8965 12.2184 18.3973L11.1812 21.509C10.963 22.1637 10.037 22.1637 9.8188 21.509L8.78158 18.3973C8.28128 16.8965 7.10354 15.7187 5.60266 15.2184L2.49098 14.1812C1.83634 13.963 1.83634 13.037 2.49098 12.8188L5.60266 11.7816C7.10354 11.2813 8.28128 10.1035 8.78158 8.60266Z" fill="currentColor"></path><path d="M17.1913 3.69537L17.6794 2.23105C17.7821 1.92298 18.2179 1.92298 18.3206 2.23105L18.8087 3.69537C19.0441 4.40167 19.5983 4.9559 20.3046 5.19133L21.769 5.67944C22.077 5.78213 22.077 6.21787 21.769 6.32056L20.3046 6.80867C19.5983 7.0441 19.0441 7.59833 18.8087 8.30463L18.3206 9.76895C18.2179 10.077 17.7821 10.077 17.6794 9.76895L17.1913 8.30463C16.9559 7.59833 16.4017 7.0441 15.6954 6.80867L14.231 6.32056C13.923 6.21787 13.923 5.78213 14.231 5.67944L15.6954 5.19133C16.4017 4.9559 16.9559 4.40167 17.1913 3.69537Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-black flex-grow truncate text-sm">
                                Upgrade plan
                            </p>
                            <p className="text-[#9b9b9b] text-xs flex-grow truncate text-sm">
                                Get GPT-4, DALL·E, and more
                            </p>
                        </div>
                    </div>
                    <div className="p-[0.625rem] px-2 w-full flex items-center gap-2 rounded-lg hover:bg-[#ececec]">
                        <div className="h-8 w-8 flex items-center justify-center rounded-full border">
                            <img src={dummy} alt="dummy icon" className="w-full h-full" />
                        </div>
                        <p className="text-black flex-grow truncate text-sm">
                            Fahad Bin Karim
                        </p>
                    </div>
                </div>
            </div>
        </sidebar>
    )
}

export default Sidebar

/* 

*/