import MainChatBox from "./components/mainChatBox/MainChatBox"
import Sidebar from "./components/sidebar/Sidebar"

function App() {
  return (
    <div className="relative flex antialiased">
      <Sidebar />
      <MainChatBox />
    </div>
  )
}

export default App
