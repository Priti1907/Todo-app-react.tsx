import { ITask } from './Interface';
import React, { ChangeEvent, useState } from 'react';
import TodoTask from './TodoTask';


function Todo() {

    const [task, setTask] = useState<string>("");
    const [todoList, setTodoList] = useState<ITask[]>([]);


    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {

        if (event.target.name === "task") {
            setTask(event.target.value)
        }
    };



    const addTask = (): void => {
        const newTask = { taskName: task };
        setTodoList([...todoList, newTask])
        setTask("");
                
    }
    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(todoList.filter((task) => {
            return task.taskName !== taskNameToDelete
        }))
    };

    const logOut = () => {
        localStorage.removeItem('userdetail');
        localStorage.removeItem('token');
        window.location.href = '/';
    };
    return (
        <div>
            <div className="container">
                <p className="para">Todos
                    <div>

                        <button onClick={logOut} className="logoutbtn">LogOut</button>
                    </div>

                </p>


                <section>
                    <h2>All Tasks</h2>
                    <input id="input" type="text" placeholder="Add a new task" name="task" value={task} onChange={handleChange} />
                    <button onClick={addTask} className='subbtn' type="submit">Add</button>

                    <div className="todoList">

                        {todoList.map((task: ITask) => {
                            return <TodoTask task={task} completeTask={completeTask} />
                        }
                        )}

                    </div>
                </section>

            </div>
            <div>

                <p id="emptytask" style={{ textAlign: "center" }}>
                    Seems like a quiet day
                </p>


            </div>
        </div>







    );
}

export default Todo;
