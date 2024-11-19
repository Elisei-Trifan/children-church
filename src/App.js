import ChildrenItem from './components/ChildrenItem'
import Navbar from './components/Navbar'
import TableName from './components/TableName'

import './style/App.css'

function App() {
  return (
    <>
      <Navbar />
      <TableName />
      <div className="App">
        <ChildrenItem />
      </div>
    </>
  )
}

export default App
