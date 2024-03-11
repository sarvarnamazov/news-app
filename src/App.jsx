
import { useState } from "react"
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"

function App() {
  const [category, setCategory] = useState('business')

  return (
    <>
      <Navbar setCategory={setCategory} />
      <Main category={category} />
    </>
  )
}

export default App
