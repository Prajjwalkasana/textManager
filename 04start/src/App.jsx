import { useState } from "react"
import Navbar from "./components/Navbar"
import Form from "./components/form"
import Alert from "./components/Alert"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {

  const [mode,setMode] = useState("light")
  const[changeLabel,setchangeLabel]=useState("dark")
  const[changeBody,setchangeBody]=useState("white")
  

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark")
      setchangeLabel("light")
      setchangeBody("#01071c")
      showAlert("Light Mode Enable","Successfully")
    }
    else{
      setMode("light")
      setchangeLabel("dark")
      setchangeBody("white")
      showAlert("Dark Mode Enable","Successfully")
    }
  }

  return (
    <>
    <Navbar title = "Testutils" link="URL" mode={mode} changeMode={toggleMode} changLabel={changeLabel} />
    <Alert alert={alert}/>
    <div className="container">
    <Form body={changeBody} aler={showAlert}/>
    </div>
    </>
  )
}

export default App