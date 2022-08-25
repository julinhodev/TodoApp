import { FaRegTrashAlt } from 'react-icons/fa'
import isChecked from '../assets/check.svg'
import notChecked from '../assets/notChecked.svg'
import styles from './Task.module.css'

interface Task {
    checked: boolean;
    descTask: string;
    taskId: number;
    onDeleteTask: (key: number) => void;
    onCompletedTask: (key: number) => void;
}

export function Task({ checked, descTask, taskId, onDeleteTask, onCompletedTask} : Task) {
    const onCheckedTask = !checked ? notChecked : isChecked;
    const onCheckedTaskCompleted = checked ? styles.lineTaskCompleted : "";
    const onCheckedTaskBorder = checked ? styles.task : `${styles.task} ${styles.taskBorderChecked}`;

    function handleDeleteTask(){
        onDeleteTask(taskId);
    }

    function handleIsCompletedTask(){
        onCompletedTask(taskId);
    }

    return(
        <div className={onCheckedTaskBorder}>
            <div className={styles.taskCheckedAndDesc}>
                <span className={styles.checkbox}>
                    <img src={onCheckedTask} onClick={handleIsCompletedTask}/>
                </span>
                    <textarea 
                        name="description Task"
                        className={onCheckedTaskCompleted}
                        disabled
                        value={descTask}
                    >
                    </textarea>
                <FaRegTrashAlt 
                    size={17} 
                    className={styles.icon} 
                    onClick={handleDeleteTask}
                />
            </div>
        </div>
    )
}

