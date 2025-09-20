import ProductCard from "./ProductCard"
import NavBar from "./NavBar"
import SignUp from "./SignUp"
import Login from "./Login"
import Home from "./Home"
import {Routes,Route} from 'react-router-dom'
function App(){
  
  return(
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/navbar" element={<NavBar/>}/>
    </Routes>
  )
}
export default App