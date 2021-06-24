import '../todos.css';

const todo = props => {
    return (
        <div className={props.itemStyle}>
            <li>ToDo #{props.number}: {props.todo}</li>
            <button
                className='DoneButton'
                onClick={props.clickDoneButton}
            >{props.buttonName}</button>
            <button
                className='DeleteButton'
                onClick={props.clickDeleteButton}
            >X</button>
        </div>
    )
};

export default todo;