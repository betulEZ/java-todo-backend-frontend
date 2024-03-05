import Card from 'react-bootstrap/Card';
import './Column.css';
import {Button} from "react-bootstrap";
import {ApiResponse} from "../types/ApiResponse.ts";

type Props = {
    todo: ApiResponse,
    onTodoItemChange: () => void
}
export default function Column(props:Props) {

    return (
        <>

                <Card className="home" key={props.todo.id}>
                    <Card.Body>
                        <Card.Text>{props.todo.description}</Card.Text>
                        <Button>Update</Button>
                    </Card.Body>
                </Card>
        </>
    );
}
