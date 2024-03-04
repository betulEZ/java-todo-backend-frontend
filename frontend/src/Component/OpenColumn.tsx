import {useEffect, useState} from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import './OpenColumn.css';

export default function OpenColumn() {
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
            {exampleData.map((character) => (
                <Card className="home" key={character.id}>
                    <Card.Body>
                        <Card.Text>{character.description}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}
