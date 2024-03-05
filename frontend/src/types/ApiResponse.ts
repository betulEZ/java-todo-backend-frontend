import {TodoStatus} from "../ToDoStatus.tsx";

export type ApiResponse = {
    id: string;
    description: string;
    status:TodoStatus;
};