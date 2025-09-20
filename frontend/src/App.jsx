import ProductCard from "./ProductCard"
import NavBar from "./NavBar"
import SignUp from "./SignUp"
import Login from "./Login"
import Home from "./Home"
function App(){
  
  return(
    <div className="">
      <NavBar/>
      <Home/>
      <SignUp/>
      <Login/> 
      {/* <ProductCard/> */}
    </div>
  )
}
export default App