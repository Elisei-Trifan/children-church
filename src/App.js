import ChildrenItem from './components/ChildrenItem'
import Navbar from './components/Navbar'

import './style/App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <ChildrenItem />
      </div>
    </>
  )
}

export default App
