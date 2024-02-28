import AppLogo from './components/AddClock'
import ClockContents from './components/ClockContent'
import NewDate from './components/CurrentTime'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <center>
     <AppLogo />
      <ClockContents />
      <NewDate />
    </center>
  )
}

export default App
