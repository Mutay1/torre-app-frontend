import Homepage from "./containers/index"
import Bio from "./containers/bio"
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage/>} />
      <Route exact path="/bio/:username" element={<Bio/>} />
    </Routes>
  );
}

export default App;
