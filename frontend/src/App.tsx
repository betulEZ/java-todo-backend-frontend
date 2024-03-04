import './App.css'
import OpenColumn from "./Component/OpenColumn.tsx";



function App() {

  return (
      <>
          <div className="container">
              <div className="column">
                  <h2>OPEN</h2>
                  <OpenColumn/></div>
              <div className="column">
                  <h2>IN-PROGRESS</h2>
              </div>
              <div className="column">
                  <h2>DONE</h2>
              </div>
          </div>


      </>
  )
}

export default App
