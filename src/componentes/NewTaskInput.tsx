import { ChangeEvent, useState } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import styles from './NewTaskInput.module.css'

interface propsNewTask {
    onNewTask: (task: string) => void;
}

export function NewTaskInput({ onNewTask }: propsNewTask) {
    const [task, setTask] = useState('');

    function newTaskChange(event: ChangeEvent<HTMLInputElement>){
        setTask(event.target.value);
    }

    function handleNewTask() {
        onNewTask(task);
        setTask('');
    }

    return(
        <div className={styles.container}>
            <input 
                type="text" 
                className={styles.input}
                placeholder="Adicione uma nova tarefa"
                onChange={newTaskChange}
                value={task}
            />
            <button 
                className={styles.button}
                onClick={handleNewTask}
                disabled={task.length > 0 ? false : true}
                >  
                Criar
                <IoMdAddCircleOutline 
                    className={styles.icon}
                    size={17}
                /> 
            </button>
        </div>
    )
}