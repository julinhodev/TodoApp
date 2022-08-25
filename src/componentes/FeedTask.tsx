import { useState } from 'react'
import ClipBorad from '../assets/Clipboard.svg'
import styles from './FeedTask.module.css'
import { NewTaskInput } from './NewTaskInput'
import { Task } from './Task'


const idRandom = () => Math.random();

interface listTasks {
    id: number;
    task: string;
    isCompleted: boolean
}


export function FeedTask(){
    const [listTasks, setListTasks] = useState<listTasks[]>([]);

    const countTaskCompleted = listTasks.filter(task => task.isCompleted == true).length;

    function newTask(task: string){
        setListTasks([...listTasks, {
            task: task,
            id: idRandom(),
            isCompleted: false
        }]);
    }

    function onDeleteTask(taskId: number){
        const tasksWhitouDelet = listTasks.filter(task => {
            return task.id !== taskId;
        })
        setListTasks(tasksWhitouDelet);
    }

    function onCompletedTask(taskId: number){
        const tasksWhitouDeleCompleted = listTasks.map(task => {
                return task.id === taskId ? {
                ...task,
                isCompleted: task.isCompleted ? false : true
            } : task;
        });
        setListTasks(tasksWhitouDeleCompleted);
    }

    return(
        <div>
            <NewTaskInput onNewTask={newTask}/>
            <div className={styles.container}>
                <div className={styles.countTasks}>

                    <span className={styles.tasksCreated}>Tarefas criadas 
                        <span className={styles.tasksCreatedCount}>{listTasks.length}</span>
                    </span>

                    <span className={styles.tasksCompleted}>Concluídas 
                        <span className={styles.tasksCompletedCount}>{`${countTaskCompleted} de ${listTasks.length}`}</span>
                    </span>
                </div>

                <div className={styles.FeedTask}>
                    {listTasks.length == 0 ? (
                        <div className={styles.noTasksRegistered} >
                        <img src={ClipBorad} alt="ClipBorad" />
                        <span>Você ainda não tem tarefas cadastradas</span>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                    ) : null}
                    
                    {listTasks.map(task => {
                        if(task.isCompleted){
                            return <Task key={task.id} checked descTask={task.task} taskId={task.id} onDeleteTask={onDeleteTask} onCompletedTask={onCompletedTask}/>
                        } else {
                            return <Task key={task.id} checked={task.isCompleted} descTask={task.task} taskId={task.id} onDeleteTask={onDeleteTask} onCompletedTask={onCompletedTask}/>
                        }
                    })}    
                </div>
            </div>
        </div>   
    )
}

