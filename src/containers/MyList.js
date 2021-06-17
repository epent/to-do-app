import axios from 'axios';
import React, { useState, useEffect } from 'react';

import styles from './ToDos.module.css';
import Spinner from '../components/Spinner';

const MyList = (props) => {
    const [currentLists, setLists] = useState({
        lists: [],
        loading: true
    });

    useEffect(() => {
        setLists({
            ...currentLists,
            loading: true
        });
        axios.get('https://to-do-app-d5136-default-rtdb.firebaseio.com/lists.json')
            .then(response => {
                const fetchedLists = [];
                for (let key in response.data) {
                    fetchedLists.push({
                        ...response.data[key],
                        listID: key
                    })
                }

                setLists({
                    ...currentLists,
                    lists: fetchedLists,
                    loading: false
                });
            })
            .catch(error => {
                setLists({
                    ...currentLists,
                    loading: false
                });
            });
    }, []);

    let updatedLists = <Spinner />;
    if (currentLists.loading === false) updatedLists = currentLists.lists.map((list, index) => {
        let updatedList = Object.keys(list).map((key, index2) => {
            const todo = list[key];

            let itemStyle = styles.ToDo;
            if (todo.itemDone) { itemStyle = styles.ToDoDone };

            return todo.value ? <div className={itemStyle}>
                <li key={todo.id}>ToDo#{index2 + 1}: {todo.value}</li>
            </div> : null
        });

        return <div 
            key={list.listID}
            className={styles.MyList}>
            <h4>List #{index + 1}</h4>
            {updatedList}
        </div>
    });

    return (
        <div className={styles.MyLists}>
            {updatedLists}
        </div>
    )
};

export default MyList;