import Navbar from "./components/Navbar"
import {FcSearch} from "react-icons/fc"
import {BsFillPersonPlusFill} from "react-icons/bs"

const App = () => {
  return (
    <div className="mx-auto max-w-[500px] px-4">
      <Navbar />
      <div className="flex gap-3">
        <div className="relative flex items-center flex-grow">
          <FcSearch className="ml-2 text-white text-2xl absolute "/>
          <input type="text" className="h-8 rounded-lg border border-white bg-transparent flex-grow pl-10 text-white" />
        </div>
        <BsFillPersonPlusFill className="text-white text-2xl cursor-pointer my-2"/>
      </div>
    </div>
  )
}

export default App