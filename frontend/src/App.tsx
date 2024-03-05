import './App.css'
import Column from "./Component/Column.tsx";
import AddButton from "./Component/AddButton.tsx";
import {useEffect, useState} from "react";
import {ApiResponse} from "./types/ApiResponse.ts";
import axios from "axios";

function App() {
    const [exampleData, setExampleData] = useState<ApiResponse[]>([]);

    useEffect(() => {
        fetchData();
    }, []);
    function fetchData() {
        axios.get('/api/todo')
            .then((response) => {
                setExampleData(response.data);
            })
            .catch((error) => console.error(error.message));
    }
  return (
      <>
          <h1>TODOS</h1>
          <div className="container">
              <div className="column">
                  <h2>OPEN</h2>
                  {exampleData.map(todo=> <Column todo={todo} key={todo.id}/>)}
              </div>
              <div className="column">
                  <h2>IN-PROGRESS</h2>
              </div>
              <div className="column">
                  <h2>DONE</h2>
              </div>
          </div>
          <AddButton/>


      </>
  )
}

export default App
