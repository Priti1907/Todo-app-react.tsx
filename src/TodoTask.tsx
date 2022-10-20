import React from "react";
import { ITask } from "./Interface";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <input type="checkbox" className="chk" name="task" />
                {task.taskName}
                <i onClick={() => {
                    completeTask(task.taskName)
                }} className="fa fa-trash" />

            </div>

        </div>


    );
};

export default TodoTask;