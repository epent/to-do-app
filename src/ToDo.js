import styles from './ToDos.module.css';

const todo = props => (
    <div className={props.itemStyle}>
        <li>ToDo #{props.number}: {props.todo}</li>
        <button
            className={styles.DoneButton}
            onClick={props.clickDoneButton}
        >Done</button>
        <button
            className={styles.DeleteButton}
            onClick={props.clickDeleteButton}
        >X</button>
    </div>
);

export default todo;