import React, { useState } from 'react';

import ToDo from './ToDo';
import styles from './ToDos.module.css';


const ToDos = () => {
    const [todos, setTodos] = useState({
        list: [],
        newItem: {
            id: '',
            value: '',
            itemDone: false
        }
    });

    const updateInput = (event) => {
        setTodos({
            ...todos,
            newItem: {
                id: 1 + Math.random(),
                value: event.target.value,
                itemDone: false
            }
        });
    };

    const addNewItem = () => {
        const currentList = [...todos.list];
        currentList.push(todos.newItem);
        setTodos({
            ...todos,
            list: currentList
        });
    };

    const removeItem = (itemId) => {
        const currentList = [...todos.list];
        const updatedList = currentList.filter(todo => todo.id !== itemId)
        setTodos({
            ...todos,
            list: updatedList
        });
    };

    const crossItem = (prevState, itemId, index) => {
        const currentList = [...todos.list];
        const currentToDo = currentList[index];
        if (currentToDo.id === itemId) {
            currentToDo.itemDone = !prevState
            setTodos({
                ...todos,
                list: currentList
            });
        }
    };

    const clearAllItems = () => {
        setTodos({
            ...todos,
            list: []
        });
    };


    let updatedList = null;
    if (todos.list.length >= 1) {
        updatedList = todos.list.map((todo, index) => {
            let itemStyle = styles.ToDo;
            if (todo.itemDone) { itemStyle = styles.ToDoDone };

            return <div>
                <ToDo
                    key={todo.id}
                    number={index + 1}
                    todo={todo.value}
                    itemStyle={itemStyle}
                    clickDoneButton={() => crossItem(todo.itemDone, todo.id, index)}
                    clickDeleteButton={() => removeItem(todo.id)} />
            </div>
        })
    };

    const clearAllButton = updatedList ?
        <button
            className={styles.ClearAllButton}
            onClick={clearAllItems}
        >Clear all</button>
        : null;

    return (
        <div className={styles.ToDos}>
            <h3>My ToDo List</h3>
            <input
                type="text"
                placeholder="Enter task"
                value={todos.newItem.value}
                onChange={updateInput}
            />
            <button
                className={styles.AddButton}
                onClick={addNewItem}>Add</button>
            {updatedList}
            {clearAllButton}
        </div>
    );
};

export default ToDos;