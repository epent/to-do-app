import styles from '../containers/ToDos.module.css';

const todo = props => {
    return (
        <div className={props.itemStyle}>
            <li>ToDo #{props.number}: {props.todo}</li>
            <button
                className={styles.DoneButton}
                onClick={props.clickDoneButton}
            >{props.buttonName}</button>
            <button
                className={styles.DeleteButton}
                onClick={props.clickDeleteButton}
            >X</button>
        </div>
    )
};

export default todo;