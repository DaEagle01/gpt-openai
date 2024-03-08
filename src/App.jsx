import MainChatBox from "./components/mainChatBox/MainChatBox"
import Sidebar from "./components/sidebar/Sidebar"

function App() {
  return (
    <div className="relative flex antialiased">
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      <MainChatBox />
    </div>
  )
}

export default App
