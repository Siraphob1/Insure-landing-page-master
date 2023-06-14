import { useState } from "react"
import DataContext from "./DataContext"
import HeaderComponent from "./component/HeaderComponent"
import MainComponent from "./component/MainComponent"
import NavComponent from "./component/NavComponent"




function App() {
  const [clickmenu,setClickmenu] = useState(false)
  

  return (
    <DataContext.Provider value={
      {clickmenu,setClickmenu}
    }>
      <NavComponent/>
      <HeaderComponent/>
      <MainComponent/>
    </DataContext.Provider>
  )
}

export default App
