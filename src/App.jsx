import Homepage from "./Homepage"
import {BrowserRouter , Routes ,Route } from "react-router-dom"
import CreateUsers from "./CreateUsers"
import Users from "./Users"
import Edituser from "./Edituser"

const App=()=>{
    return(
       <BrowserRouter>
       <Homepage></Homepage>
       <Routes>
          {/* in next line if we use "/" instead of "/createusers" ..it will load the homepage  */}
          {/* giving path as "/" will load homepage  */}
        <Route path="/createusers" element={<CreateUsers/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/edit/:index" element={<Edituser/>}></Route>
       </Routes>
       </BrowserRouter>
    )
}
export default App