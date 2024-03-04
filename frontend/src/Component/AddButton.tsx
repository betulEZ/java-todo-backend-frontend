import { Button, CardFooter } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import './AddButton.css';

export default function AddButton() {
    const [inputValue, setInputValue] = useState("");

    function addTodo() {
        axios.post("/api/todo", { description: inputValue })
            .then((response) => {
                console.log("Todo added:", response.data);
                // Optionally, you can clear the input value here
                setInputValue("");
            })
            .catch((error) => console.error("Error adding todo:", error.message));
        window.location.reload();
    }

    return (
        <>
            <CardFooter>
                <input className="input"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button style={{background: "gray",margin:20}} onClick={addTodo}>Add toDo</Button>
            </CardFooter>
        </>
    );
}