
const SidebarHandler = ({ showSidebar, setShowSidebar }) => {
    const handleStyle = "h-3 w-1 bg-[#9b9b9b] group-hover:bg-black transition-transform group-hover:duration-100 duration-300 ease-in-out transform rotate-0"
    return (
        <div
            onClick={() => setShowSidebar(!showSidebar)}
            className={`group fixed left-0 top-1/2 z-40 transform hidden ${showSidebar ? 'translate-x-[16.25rem]' : "translate-x-0"} -translate-y-1/2 rotate-0 hover:bg-opacity-0 h-[4.5rem] w-8 md:flex items-center justify-center cursor-pointer opacity-100`}
        >
            <div className="hidden group-hover:flex relative items-center justify-center">
                <div className="absolute -top-4 flex cursor-pointer whitespace-nowrap duration-500 -right-[130px] opacity-100">
                    <p className="h-fit rounded-md bg-black px-2 py-1 text-sm text-white">{showSidebar ? 'Close' : 'Open'} sidebar</p>
                    <span className="absolute -left-[2px] top-[50%] h-0 w-0 -translate-y-1/2 -rotate-[135deg] border-b-[15px] border-r-[15px] border-b-transparent border-r-black"></span>
                </div>
            </div>
            <div className="w-max h-max">
                <div className={`${showSidebar ? "group-hover:translate-y-[2px] rounded-t-full group-hover:rounded-bl-full group-hover:rotate-[17deg]" : "translate-y-[1px] rounded-b-full rounded-br-full rotate-[163deg]"} ${handleStyle}`}>
                </div>
                <div className={`${showSidebar ? "group-hover:-translate-y-[2px] rounded-b-full group-hover:rounded-tl-full group-hover:-rotate-[17deg] -mt-[1px] group-hover:-mt-0" : "-translate-y-[2px] rounded-t-full rounded-br-full rotate-[197deg]  group-hover:-mt-0"} ${handleStyle}`}>
                </div>
            </div>
        </div>
    )
}

export default SidebarHandler